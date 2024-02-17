import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

const header = () => {
  return (
    <div>
      <header className="hero-header">
        <NavLink className="placebo-h1" to="/"> Placebo </NavLink>
        <NavLink className="products-txt" to="/products">Products</NavLink>
        <NavLink className="about-txt" to="/about">About Us</NavLink>
      </header>
    </div>
  );
};

export default header;
