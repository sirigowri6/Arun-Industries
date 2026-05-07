function Statistics() {
  const stats = [
    {
      number: "30+",
      title: "Years Experience",
    },

    {
      number: "720 KL",
      title: "Processing Capacity",
    },

    {
      number: "100%",
      title: "Eco-Friendly Process",
    },

    {
      number: "500+",
      title: "Industrial Clients",
    },
  ];

  return (
    <section
      style={{
        padding: "100px 40px",
        backgroundColor: "#111827",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          marginBottom: "60px",
        }}
      >
        Our Achievements
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#1f2937",
              padding: "40px",
              borderRadius: "20px",
              textAlign: "center",
              boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
            }}
          >
            <h1
              style={{
                fontSize: "50px",
                color: "#00bfff",
                marginBottom: "20px",
              }}
            >
              {item.number}
            </h1>

            <p
              style={{
                fontSize: "20px",
              }}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;
