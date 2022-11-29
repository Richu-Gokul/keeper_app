import React from "react";
import "../Style.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="container ">
      <footer className="footer  bg-light border-top border-4 ">
        <p className="text-center mt-2 ">copyright © {year}</p>
      </footer>
    </div>
  );
};

export default Footer;
