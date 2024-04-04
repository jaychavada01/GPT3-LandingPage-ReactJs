import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const links = [
    { id: "#home", text: "Home" },
    { id: "#wgpt3", text: "What is GPT3?" },
    { id: "#possibility", text: "Open AI" },
    { id: "#features", text: "Case Studies" },
    { id: "#blog", text: "Library" },
  ];

  const toggleMenuHandler = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          {links.map((link) => (
            <p key={link.id}>
              <a href={link.id}>{link.text}</a>
            </p>
          ))}
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={toggleMenuHandler} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={toggleMenuHandler} />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              {links.map((link) => (
                <p key={link.id}>
                  <a href={link.id}>{link.text}</a>
                </p>
              ))}
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
