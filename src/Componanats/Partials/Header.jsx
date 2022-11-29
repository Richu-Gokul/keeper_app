import React from "react";
import "../Style.css";

const Header = () => {
  return (
    <div className="container-fluid mb-3 header">
      <nav className="row nav nav-bar  text-white shadow">
        <div className="col py-2">
          <h2 className="px-3 nav-head">Keeper</h2>
        </div>
      </nav>
    </div>
  );
};

export default Header;
