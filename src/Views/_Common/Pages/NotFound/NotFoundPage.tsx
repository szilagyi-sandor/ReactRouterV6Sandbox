import React from "react";

import { useDocTitle } from "../../../../Modules/Routing/RouteHandlers";

export default function NotFoundPage() {
  useDocTitle("Not Found");

  return (
    <section>
      <header>
        <h3>Not found</h3>
      </header>

      <div className="content">Content</div>
    </section>
  );
}
