import React, { useState } from "react";

import "./App.scss";

import Routing from "./Modules/Routing/SmartComponents/Routing/Routing";

function App() {
  const [role, setRole] = useState("admin");
  const [loggedIn, setloggedIn] = useState(false);

  return (
    <div id="app">
      <div className="btnContainer">
        <button onClick={() => setloggedIn(!loggedIn)}>
          login {loggedIn.toString()}
        </button>

        <button
          onClick={() => setRole(role === "admin" ? "superAdmin" : "admin")}
        >
          {role}
        </button>
      </div>

      <Routing loggedIn={loggedIn} role={role} />
    </div>
  );
}

export default App;
