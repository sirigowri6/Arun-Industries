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
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "20px 25px",
        backgroundColor: scrolled
          ? "rgba(0,0,0,0.9)"
          : "transparent",
        transition: "0.4s",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* Logo */}

        <h1
          style={{
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          Arun Industries
        </h1>

        {/* Navigation Links */}

        <div
          style={{
            display: "flex",
            gap: "22px",
            alignItems: "center",
            paddingRight: "20px",
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

          {/* Explore Button */}

          <a
  href="/explore"
  style={{
    backgroundColor: "#00bfff",
    color: "white",
    padding: "10px 22px",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "15px",
  }}
>
  Explore
</a>
        </div>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "15px",
  fontWeight: "500",
};

export default Navbar;