import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar  navbar-dark bg-dark mt-1 mb-3">
      <a className="navbar-brand" href="/">
        <img
          src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Reminder Pro"
        />{" "}
        Reminder Pro
      </a>
    </nav>
  );
};

export default NavBar;
