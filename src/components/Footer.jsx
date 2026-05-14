import logo from "../assets/logo.png";
function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0f172a",
        color: "white",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "20px",
  }}
>
  <img
    src={logo}
    alt="logo"
    style={{
      width: "50px",
      height: "50px",
      objectFit: "contain",
    }}
  />

  <h2
    style={{
      margin: 0,
      fontSize: "32px",
    }}
  >
    Arun Industries
  </h2>
</div>

      <p
        style={{
          lineHeight: "2",
          fontSize: "18px",
        }}
      >
        Lubricating Oil Refineries
        <br />
        Peenya Industrial Area, Bangalore
        <br />
        arunindustrieskumar@yahoo.co.in
      </p>

      <p
        style={{
          marginTop: "20px",
          color: "#cbd5e1",
        }}
      >
        © 2026 Arun Industries. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;