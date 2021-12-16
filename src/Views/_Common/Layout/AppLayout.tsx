import React, { Suspense } from "react";

import "./AppLayout.scss";

import { Link, Outlet } from "react-router-dom";
import { getPath } from "../../../Modules/Routing/RouteHandlers";
import { paths } from "../../../Modules/Routing/_Constants/paths";

export default function AppLayout() {
  return (
    <section className="appLayout">
      <header>
        <h1>App Layout</h1>

        <nav>
          <ul>
            <li>
              <Link to={getPath(paths.homePage)}>Home</Link>
            </li>

            <li>
              <Link to={getPath(paths.loginPage)}>Login</Link>
            </li>

            <li>
              <Link to={getPath(paths.signInPage)}>Sign in</Link>
            </li>

            <li>
              <Link to={getPath(paths.registerPage)}>Register</Link>
            </li>

            <li>
              <Link to={getPath(paths.signUpPage)}>Sign up</Link>
            </li>

            <li>
              <Link to={getPath(paths.adminHomePage)}>AdminHome</Link>
            </li>

            <li>
              <Link to={getPath(paths.administratorHomePage)}>
                AdministratorHome
              </Link>
            </li>

            <li>
              <Link to={getPath(paths.page1Page)}>AdminPage1</Link>
            </li>

            <li>
              <Link to={getPath(paths.page2Page)}>AdminPage2</Link>
            </li>

            <li>
              <Link to={getPath(paths.page2Page2)}>AdminPage22</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="content">
        <Suspense fallback={"App loading..."}>
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
}
