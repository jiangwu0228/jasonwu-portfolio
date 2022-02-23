import React from "react";

import "./menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
  const menus = [
    {
      name: "Home",
      link: "#intro",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Works",
      link: "#works",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        {menus.map((menu, index) => {
          return (
            <li key={index} onClick={() => setMenuOpen(false)}>
              <a href={menu.link}>{menu.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
