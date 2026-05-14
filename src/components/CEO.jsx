import ceo from "../assets/ceo.png";

function CEO() {
  return (
    <section
      style={{
        padding: "120px 60px",
        background: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={ceo}
            alt="CEO"
            style={{
              width: "100%",
              maxWidth: "420px",
              borderRadius: "25px",
            }}
          />
        </div>

        <div>
          <p
            style={{
              color: "#00bfff",
              fontSize: "18px",
              letterSpacing: "3px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            LEADERSHIP
          </p>

          <h1
            style={{
              fontSize: "65px",
              lineHeight: "1.1",
              marginBottom: "35px",
              color: "#111827",
            }}
          >
            Visionary Leadership
          </h1>

          <p
            style={{
              lineHeight: "2",
              color: "#4b5563",
              fontSize: "20px",
            }}
          >
            Arun Industries is guided by strong
            leadership committed towards sustainable
            industrial growth and environmentally
            responsible refining solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CEO;
