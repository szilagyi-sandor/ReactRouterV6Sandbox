import React from "react";

import { useDocTitle } from "../../../../Modules/Routing/RouteHandlers";

export default function RestrictedPage() {
  useDocTitle("Restricted");

  return (
    <section>
      <header>
        <h3>Restricted</h3>
      </header>

      <div className="content">Content</div>
    </section>
  );
}
