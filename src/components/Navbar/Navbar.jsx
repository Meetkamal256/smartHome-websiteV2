import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { scroller } from "react-scroll";
import "./navbar.css";
import { pageLinks } from "../../data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };
  
  const handleNavClick = (path, isExternal) => {
    if (isExternal) {
      navigate(path);
    } else {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(path.substring(1), {
          smooth: true,
          duration: 500,
          offset: -150,
        });
      }, 0);
    }
    closeNavbar();
  };
  
  return (
    <nav>
      <div className="container nav__container">
        <NavLink
          to="/"
          className="nav__logo"
          onClick={() => handleNavClick("#header", false)}
        >
          <h3>SmartHome</h3>
        </NavLink>
        
        <ul className={`nav__items ${isOpen ? "open" : ""}`}>
          {pageLinks.map((link) => {
            const { id, path, text, isExternal } = link;
            return (
              <li key={id}>
                {isExternal ? (
                  <NavLink to={path} onClick={closeNavbar}>
                    {text}
                  </NavLink>
                ) : (
                  <a
                    href={`${path}`}
                    onClick={() => handleNavClick(path, isExternal)}
                  >
                    {text}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
        
        <div className="nav__signin-signup">
          <a href="#">Login</a>
          <a href="#" className="btn">
            Signup
          </a>
        </div>
        
        <button id="menu-btn" onClick={toggleNavbar}>
          {isOpen ? <IoMdClose /> : <MdOutlineMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
