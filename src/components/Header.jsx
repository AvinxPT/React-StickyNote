import React from "react";

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
        {!logged && <span>Register</span>}
      </div>
    </section>
  );
};

export default Header;
