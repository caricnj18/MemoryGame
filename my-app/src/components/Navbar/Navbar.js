import React from "react";

import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="navbar-brand" to="/">
      Clicky Game
    </div>
  </nav>
);

export default Navbar;
