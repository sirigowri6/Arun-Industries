import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        padding: "20px 25px",
        backgroundColor: scrolled
          ? "rgba(0,0,0,0.85)"
          : "transparent",
        transition: "0.4s",
      }}
    >
      <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingRight: "60px",
  }}
>
        <h1
          style={{
            color: "white",
            fontSize: "22px",
            fontWeight: "bold",
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          Arun Industries
        </h1>

        <div
  style={{
    display: "flex",
    gap: "22px",
    marginLeft: "auto",
    paddingRight: "30px",
    alignItems: "center",
  }}
>
          <a href="#home" style={linkStyle}>
            Home
          </a>

          <a href="#about" style={linkStyle}>
            About
          </a>

          <a href="#services" style={linkStyle}>
            Services
          </a>

          <a href="#contact" style={linkStyle}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "500",
};

export default Navbar;