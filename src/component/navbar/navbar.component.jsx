import React from "react";
import "./navbar.style.css";
const Navbar = ({ name, image }) => (
  <nav class="navbar navstyle">
    <a class="navbar-brand" href="#">
      Edvora
    </a>
    <div className="userInfo">
      {name}
      <img src={image} />
    </div>
  </nav>
);
export default Navbar;
