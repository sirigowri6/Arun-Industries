import Statistics from "./Statistics.jsx";
import Certification from "./Certification.jsx";

function Explore() {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {/* Header */}

      <div
        style={{
          backgroundColor: "#111827",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "20px",
          }}
        >
          Explore Arun Industries
        </h1>

        <p
          style={{
            fontSize: "22px",
            maxWidth: "900px",
            margin: "auto",
            lineHeight: "1.8",
          }}
        >
          Certifications, government approvals, industrial
          achievements, and company brochure.
        </p>

        {/* Brochure Button */}

        <a
          href="/company-brochure.pdf"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            marginTop: "35px",
            backgroundColor: "#00bfff",
            color: "white",
            padding: "15px 35px",
            borderRadius: "40px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Download Company Brochure
        </a>
      </div>

      {/* Statistics */}

      <Statistics />

      {/* Certifications */}

      <Certification />
    </div>
  );
}

export default Explore;