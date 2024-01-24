import { Link } from "react-router-dom";
import "./header.css";
import Button from "./Button";
import SignUpModal from "./SignUpModal";
import LogInModal from "./LogInModal";

import React from "react";
const Navbar = () => {
  return (
    <header>
      <h3 className="logo">
        <strong>Apex</strong> Homes.
      </h3>
      <nav>
        <ul className="navbar-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="last_li">
            <Link to="">
              <SignUpModal />
            </Link>
          </li>
          <li>
            <Link to="">
              <LogInModal />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
