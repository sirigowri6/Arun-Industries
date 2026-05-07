function Hero() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1974&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.65)",
          padding: "50px",
          borderRadius: "20px",
          textAlign: "center",
          maxWidth: "1000px",
        }}
      >
        <h1 style={{ fontSize: "65px", marginBottom: "20px" }}>
          Arun Industries
        </h1>

        <h2 style={{ marginBottom: "20px", fontWeight: "normal" }}>
          Lubricating Oil Refineries
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.7" }}>
          An Eco-Friendly Organization specializing in recycling and
          re-refining used lubricating oils with environmentally safe
          and sustainable industrial solutions.
        </p>
      </div>
    </div>
  );
}

export default Hero;