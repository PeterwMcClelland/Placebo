import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

const header = () => {
  return (
    <div>
      <header className="hero-header">
        <NavLink to="/"> Placebo </NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </header>
    </div>
  );
};

export default header;
