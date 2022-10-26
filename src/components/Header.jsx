import React from "react";

const Header = () => {
  const clickHandler = (e) => {
    e.preventDefault();
    alert("Clicked");
  };

  return (
    <section className="header">
      <div>Note do fabinho</div>
      <div className="header-actions">
        <span
          className="header-actions-register"
          onClick={() => alert("Clicked")}
        >
          Add new note
        </span>
      </div>
    </section>
  );
};

export default Header;
