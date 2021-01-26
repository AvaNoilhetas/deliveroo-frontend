import React from "react";
import logo from "./../assets/img/logo.svg";

const Header = () => {
  return (
    <>
      <div className="container py-2">
        <img alt="Deliveroooooooo" src={logo} width="154" height="40" />
      </div>
      <hr className="text-gray-border" />
    </>
  );
};

export default Header;
