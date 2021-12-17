import React, { Suspense } from "react";

import { Route, Routes } from "react-router";
import { checkAuth } from "../../../Auth/_Helpers/checkAuth";
import { lazyComponents } from "../../_Constants/lazyComponents";
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
                element={<LoginPage pathItem={item} />}
              />
            ))}

            {[signUpPagePathItem, registerPagePathItem].map((item) => (
              <Route
                key={item.path}
                path={item.path}
                element={<RegisterPage pathItem={item} />}
              />
            ))}

            <Route path="*" element={<NotFoundPage />} />
          </Route>

          {checkAuth(loggedIn, role) && (
            <>
              {adminLayoutPaths.map((item) => (
                <Route path={item.path} element={<AdminLayout />}>
                  <Route
                    index
                    element={<AdminHomePage pathItem={adminHomePagePathItem} />}
                  />

                  {checkAuth(loggedIn, role, "superAdmin") && (
                    <Route
                      path={page1PagePathItem.path}
                      element={<AdminPage1Page pathItem={page1PagePathItem} />}
                    />
                  )}

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
            </>
          )}

          {adminLayoutPaths.map((item) => (
            <Route
              path={`${item.path}*`}
              element={
                <SiteLayout>
                  <LoginPage pathItem={loginPagePathItem} />
                </SiteLayout>
              }
            />
          ))}

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
