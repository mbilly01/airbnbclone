import React from "react";
import logo from '../img/logo.png';
const Header = () => {
  return (
    <header>
      <section className="logo">
        <img src={logo} alt="" />
      </section>
      <p>Project 2 - Learn React.Js</p>
    </header>
  );
}

export default Header;