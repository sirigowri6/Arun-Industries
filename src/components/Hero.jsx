function Hero() {
  return (
    <section
      id="home"
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1974&auto=format&fit=crop')",

        backgroundSize: "cover",
        backgroundPosition: "center",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        textAlign: "center",
        color: "white",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      ></div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "75px",
            marginBottom: "20px",
          }}
        >
          Arun Industries
        </h1>

        <p
          style={{
            fontSize: "28px",
            maxWidth: "900px",
            margin: "auto",
            lineHeight: "1.8",
          }}
        >
          Leading Lubricating Oil Re-refineries and Grease Oil
          
        </p>
      </div>
    </section>
  );
}

export default Hero;