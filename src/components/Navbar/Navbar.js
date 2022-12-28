import React from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
    };
  };
  return (
    <nav>
      <NavLink style={navLinkStyles} to="/" className="Navbar">
        Accueil
      </NavLink>
      <NavLink style={navLinkStyles} to="/Apropos" className="Navbar">
        A propos
      </NavLink>
    </nav>
  );
};


export default Navbar