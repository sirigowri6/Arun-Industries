function WhyChoose() {
  const features = [
    "Zero Discharge Oil Recycling Plant",
    "Established Since 1990",
    "ISO 14001:2015 Certified",
    "Environmentally Safe Operations",
    "Vacuum Distillation Technology",
    "Authorized by KSPCB/CPCB",
  ];

  return (
    <section
      style={{
        padding: "100px 40px",
        backgroundColor: "#0f172a",
        color: "white",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            marginBottom: "60px",
          }}
        >
          Why Choose Us
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
          }}
        >
          {features.map((item, index) => (
            <div
              key={index}
              style={{
                background:
                  "linear-gradient(145deg,#1e293b,#111827)",
                padding: "35px",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "0.4s",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              <h2
                style={{
                  fontSize: "24px",
                  lineHeight: "1.5",
                }}
              >
                ✓ {item}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;