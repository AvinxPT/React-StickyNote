import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = ({ showAddForm, logged, logout }) => {
  return (
    <section className="header">
      <div>Note do fabinho</div>
      <div className="header-actions">
        {logged && (
          <span className="header-actions-register" onClick={showAddForm}>
            Add new note
          </span>
        )}
        {logged && <span onClick={logout}>Logout</span>}
        {console.log(logged)}
        {!logged && (
          <NavLink className="navlink" to="/register">
            Register
          </NavLink>
        )}
        {!logged && (
          <NavLink className="navlink" to="/login">
            Login
          </NavLink>
        )}
      </div>
    </section>
  );
};

export default Header;
