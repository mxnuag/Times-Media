import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ filterNews }) => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (offset > 500) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${scrolled ? "sticky" : ""} ${hidden ? "hidden" : ""}`}>
      <div className="logo">
        <img src="/logo.jpg" alt="logo" />
      </div>
      <ul className={show ? "show" : ""}>
        <li onClick={() => filterNews("everything")}>ALL</li>
        <li onClick={() => filterNews("business")}>BUSINESS</li>
        <li onClick={() => filterNews("entertainment")}>ENTERTAINMENT</li>
        <li onClick={() => filterNews("general")}>GENERAL</li>
        <li onClick={() => filterNews("health")}>HEALTH</li>
        <li onClick={() => filterNews("science")}>SCIENCE</li>
        <li onClick={() => filterNews("sports")}>SPORTS</li>
        <li onClick={() => filterNews("technology")}>TECHNOLOGY</li>
      </ul>
      <GiHamburgerMenu onClick={() => setShow(!show)} />
    </nav>
  );
};

export default Navbar;
