function Certification() {
  const certificates = [
    "ISO 14001:2015 Certified",
    "KSPCB Authorized",
    "CPCB Approved",
    "Hazardous Waste Recycling Authorization",
  ];

  return (
    <section
      id="certifications"
      style={{
        padding: "100px 40px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          marginBottom: "20px",
        }}
      >
        Certifications & Government Approvals
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "20px",
          maxWidth: "900px",
          margin: "0 auto 60px",
          lineHeight: "1.8",
          color: "#444",
        }}
      >
        Arun Industries operates under environmentally responsible
        industrial standards and complies with government-authorized
        recycling and re-refining regulations.
      </p>

      {/* Certification Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {certificates.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "20px",
              textAlign: "center",
              boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
              transition: "0.3s",
            }}
          >
            <h2
              style={{
                fontSize: "26px",
                color: "#111827",
                lineHeight: "1.5",
              }}
            >
              ✓ {item}
            </h2>
          </div>
        ))}
      </div>

      {/* Government Approval Section */}

      <div
        style={{
          marginTop: "80px",
          backgroundColor: "#111827",
          color: "white",
          padding: "50px",
          borderRadius: "25px",
          maxWidth: "1100px",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "30px",
          }}
        >
          Government Recognition
        </h2>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "2",
          }}
        >
          Arun Industries has received approval and authorization
          related to environmentally sound recycling and re-refining
          of hazardous industrial waste from the Central Pollution
          Control Board (CPCB).
        </p>

        <a
          href="/CPCB Certificate.pdf"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            marginTop: "35px",
            backgroundColor: "#00bfff",
            color: "white",
            padding: "15px 30px",
            borderRadius: "40px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          View CPCB Certificate
        </a>

        <a
          href="/company-brochure.pdf"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            marginTop: "35px",
            marginLeft: "20px",
            backgroundColor: "white",
            color: "#111827",
            padding: "15px 30px",
            borderRadius: "40px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Download Brochure
        </a>
      </div>
    </section>
  );
}

export default Certification;