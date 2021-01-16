import React from "react";
import logo from "./../assets/img/logo.svg";

const Header = () => {
  return (
    <>
      <div className="container py-2">
        <img alt="Delili" src={logo} width="154" height="40" />
      </div>
      <hr className="text-gray-lightest" />
    </>
  );
};

export default Header;
