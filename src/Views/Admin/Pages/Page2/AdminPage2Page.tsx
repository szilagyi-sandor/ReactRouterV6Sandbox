import React from "react";

import { useDocTitle } from "../../../../Modules/Routing/RouteHandlers";
import { _getTitle } from "../../../../Modules/Routing/_Helpers/abstractions";
import { PageProps } from "../../../../Modules/Routing/RouteHandlers/_Interfaces/PageProps";

export default function AdminPage2Page({ pathItem }: PageProps) {
  useDocTitle(_getTitle(pathItem));

  return (
    <section>
      <header>
        <h3>Admin Page 2</h3>
      </header>

      <div className="content">Content</div>
    </section>
  );
}
