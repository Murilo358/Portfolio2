import React from "react";
import { FaHome, FaUser, FaCog, FaFolder } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import "./Navbar.scss";
function Navbar({ activeSection, handleNavClick }) {
  return (
    <ul id="my-nav">
      <li
        className={activeSection === 0 ? "active" : ""}
        onClick={() => handleNavClick(0)}
      >
        <FaHome />
      </li>
      <li
        className={activeSection === 1 ? "active" : ""}
        onClick={() => handleNavClick(1)}
      >
        <FaUser />
      </li>
      <li
        className={activeSection === 2 ? "active" : ""}
        onClick={() => handleNavClick(2)}
      >
        <FaCog />
      </li>
      <li
        className={activeSection === 3 ? "active" : ""}
        onClick={() => handleNavClick(3)}
      >
        <FaFolder />
      </li>
      <li
        className={activeSection === 4 ? "active" : ""}
        onClick={() => handleNavClick(4)}
      >
        <RiContactsFill />
      </li>
    </ul>
  );
}

export default Navbar;
