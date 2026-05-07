function Explore() {
  return (
    <div
      style={{
        paddingTop: "140px",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          marginBottom: "30px",
        }}
      >
        Explore Arun Industries
      </h1>

      <p
        style={{
          fontSize: "22px",
          maxWidth: "900px",
          margin: "auto",
          lineHeight: "2",
        }}
      >
        Certifications, company brochure,
        government approvals and industrial achievements.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "30px",
          padding: "60px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <div style={cardStyle}>
          <h1 style={numberStyle}>25+</h1>
          <p>Years Experience</p>
        </div>

        <div style={cardStyle}>
          <h1 style={numberStyle}>5000+</h1>
          <p>Tons Recycled</p>
        </div>

        <div style={cardStyle}>
          <h1 style={numberStyle}>100%</h1>
          <p>Eco Friendly Process</p>
        </div>
      </div>

      <div
  style={{
    paddingBottom: "100px",
  }}
>
  <a
    href="company-brochure.pdf"
    target="_blank"
    rel="noreferrer"
    style={buttonStyle}
  >
    Download Company Brochure
  </a>

  <a
    href="ISO-Certificate.pdf.jpeg"
    target="_blank"
    rel="noreferrer"
    style={{
      ...buttonStyle,
      backgroundColor: "#111827",
      marginLeft: "20px",
    }}
  >
    View ISO Certificate
  </a>
</div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "white",
  padding: "40px",
  borderRadius: "20px",
  boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
};

const numberStyle = {
  fontSize: "55px",
  color: "#00bfff",
};

const buttonStyle = {
  display: "inline-block",
  backgroundColor: "#00bfff",
  color: "white",
  padding: "15px 35px",
  borderRadius: "40px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "18px",
};

export default Explore;