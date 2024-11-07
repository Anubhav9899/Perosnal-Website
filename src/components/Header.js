import React, { useEffect } from "react";
import "./Header.css"; // Import your CSS file

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 50) {
        header.classList.add("scrolled"); // Add class on scroll
      } else {
        header.classList.remove("scrolled"); // Remove class when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
    };
  }, []);

  return (
    <header className="header">
      <h1>hi,i am Anubhav Singh</h1>
    </header>
  );
}

export default Header;
