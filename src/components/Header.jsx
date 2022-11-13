import React from "react";
import icon from '../img/envelope-solid.svg';
const Header = () => {
  return (
    <header>
      <img src={icon} alt="" />
      <p>My Travel Journal</p>
    </header>
  );
}

export default Header;