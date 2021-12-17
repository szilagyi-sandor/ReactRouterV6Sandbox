import React, { Suspense } from "react";

import { Route, Routes } from "react-router";
import LoginGuard from "./Parts/LoginGuard/LoginGuard";
import { checkAuth } from "../../../Auth/_Helpers/checkAuth";
import NotFoundGuard from "./Parts/NotFoundGuard/NotFoundGuard";
import { lazyComponents } from "../../_Constants/lazyComponents";
import RestrictionGuard from "./Parts/RestrictionGuard/RestrictionGuard";
import {
  homePagePathItem,
  loginPagePathItem,
  page1PagePathItem,
  page2PagePathItem,
  page2Page2PathItem,
  signInPagePathItem,
  signUpPagePathItem,
  siteLayoutPathItem,
  adminLayoutPathItem,
  registerPagePathItem,
  adminHomePagePathItem,
  administratorLayoutPathItem,
} from "../../_Constants/pathObjectParts";

const {
  HomePage,
  AppLayout,
  LoginPage,
  SiteLayout,
  AdminLayout,
  NotFoundPage,
  RegisterPage,
  AdminHomePage,
  AdminPage1Page,
  AdminPage2Page,
  RestrictedPage,
} = lazyComponents;

const adminLayoutPaths = [adminLayoutPathItem, administratorLayoutPathItem];

export default function Routing({
  role,
  loggedIn,
}: {
  role: string;
  loggedIn: boolean;
}) {
  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={siteLayoutPathItem.path} element={<SiteLayout />}>
            <Route index element={<HomePage pathItem={homePagePathItem} />} />

            {[loginPagePathItem, signInPagePathItem].map((item) => (
              <Route
                key={item.path}
                path={item.path}
                element={
                  <NotFoundGuard condition={!loggedIn}>
                    <LoginPage pathItem={item} />
                  </NotFoundGuard>
                }
              />
            ))}

            {[signUpPagePathItem, registerPagePathItem].map((item) => (
              <Route
                key={item.path}
                path={item.path}
                element={
                  <NotFoundGuard condition={!loggedIn}>
                    <RegisterPage pathItem={item} />
                  </NotFoundGuard>
                }
              />
            ))}

            <Route path="*" element={<NotFoundPage />} />
          </Route>

          {adminLayoutPaths.map((item) => (
            <Route
              path={item.path}
              element={
                <LoginGuard condition={checkAuth(loggedIn, role)}>
                  <AdminLayout />
                </LoginGuard>
              }
            >
              <Route
                index
                element={<AdminHomePage pathItem={adminHomePagePathItem} />}
              />

              <Route
                path={page1PagePathItem.path}
                element={
                  <RestrictionGuard
                    condition={checkAuth(loggedIn, role, "superAdmin")}
                  >
                    <AdminPage1Page pathItem={page1PagePathItem} />
                  </RestrictionGuard>
                }
              />

              {[page2PagePathItem, page2Page2PathItem].map((item) => (
                <Route
                  key={item.path}
                  path={item.path}
                  element={<AdminPage2Page pathItem={item} />}
                />
              ))}

              <Route
                path={page1PagePathItem.path}
                element={<RestrictedPage />}
              />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          ))}

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
