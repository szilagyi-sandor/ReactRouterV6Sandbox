import { lazy } from "react";

export const lazyComponents = {
  SiteLayout: lazy(() => import("../../../Views/Site/Layout/SiteLayout")),
  HomePage: lazy(() => import("../../../Views/Site/Pages/Home/HomePage")),
  AppLayout: lazy(() => import("../../../Views/_Common/Layout/AppLayout")),
  AdminLayout: lazy(() => import("../../../Views/Admin/Layout/AdminLayout")),
  LoginPage: lazy(() => import("../../../Views/Site/Pages/Login/LoginPage")),
  AdminHomePage: lazy(
    () => import("../../../Views/Admin/Pages/Home/AdminHomePage")
  ),
  AdminPage1Page: lazy(
    () => import("../../../Views/Admin/Pages/Page1/AdminPage1Page")
  ),
  AdminPage2Page: lazy(
    () => import("../../../Views/Admin/Pages/Page2/AdminPage2Page")
  ),
  RegisterPage: lazy(
    () => import("../../../Views/Site/Pages/Register/RegisterPage")
  ),
  NotFoundPage: lazy(
    () => import("../../../Views/_Common/Pages/NotFound/NotFoundPage")
  ),
  RestrictedPage: lazy(
    () => import("../../../Views/_Common/Pages/Restricted/RestrictedPage")
  ),
};
