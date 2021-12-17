import React, { PropsWithChildren, Suspense } from "react";

import "./SiteLayout.scss";

import { Link, Outlet } from "react-router-dom";
import { paths } from "../../../Modules/Routing/_Constants/paths";
import {
  getPath,
  getRelativePath,
} from "../../../Modules/Routing/RouteHandlers";

export default function SiteLayout({ children }: PropsWithChildren<{}>) {
  return (
    <section className="siteLayout">
      <header>
        <h2>Site layout</h2>

        <nav>
          <ul>
            <li>
              <Link to={getRelativePath(paths.homePage)}>Home</Link>
            </li>

            <li>
              <Link to={getRelativePath(paths.loginPage)}>Login</Link>
            </li>

            <li>
              <Link to={getRelativePath(paths.registerPage)}>Register</Link>
            </li>

            <li>
              <Link to={getPath(paths.adminHomePage)}>Admin</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="content">
        <Suspense fallback={"Site loading..."}>
          {children || <Outlet />}
        </Suspense>
      </main>
    </section>
  );
}
