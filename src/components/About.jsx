function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 40px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        <h1
          style={{
            fontSize: "50px",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          About Arun Industries
        </h1>

        <p
          style={{
            fontSize: "21px",
            lineHeight: "2",
            textAlign: "justify",
          }}
        >
          Arun Industries is one of the pioneers in recycling used oil
          in India and among the oldest oil recycling facilities in
          Karnataka. Established in March 1990, the company specializes
          in recycling used oils using advanced vacuum distillation
          technology. Arun Industries operates as a zero-discharge oil
          recycling plant, ensuring environmentally responsible and
          sustainable operations.
        </p>

        <p
          style={{
            fontSize: "21px",
            lineHeight: "2",
            marginTop: "30px",
            textAlign: "justify",
          }}
        >
          By recycling used lubricating and insulating oils, the company
          contributes towards conserving petroleum resources, reducing
          environmental pollution, and saving valuable foreign exchange.
          Arun Industries is committed to safety, quality, and
          eco-friendly industrial practices.
        </p>
      </div>
    </section>
  );
}

export default About;