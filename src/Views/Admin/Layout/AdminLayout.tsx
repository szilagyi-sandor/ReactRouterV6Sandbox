import React, { Suspense } from "react";

import "./AdminLayout.scss";

import { Link, Outlet } from "react-router-dom";
import { paths } from "../../../Modules/Routing/_Constants/paths";
import {
  getPath,
  getRelativePath,
} from "../../../Modules/Routing/RouteHandlers";

export default function AdminLayout() {
  return (
    <section className="adminLayout">
      <header>
        <h2>Admin layout</h2>

        <nav>
          <ul>
            <li>
              <Link to={getRelativePath(paths.adminHomePage)}>AdminHome</Link>
            </li>

            <li>
              <Link to={getRelativePath(paths.page1Page)}>AdminPage1</Link>
            </li>

            <li>
              <Link to={getRelativePath(paths.page2Page)}>AdminPage2</Link>
            </li>

            <li>
              <Link to={getPath(paths.homePage)}>Site</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="content">
        <Suspense fallback={"Admin loading..."}>
          <Outlet />
        </Suspense>
      </main>
    </section>
  );
}
