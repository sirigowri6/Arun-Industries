import { useState } from "react";

function Service() {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: "Lubricating Oil Re-refining",
      description:
        "Lubricating oil refining solutions using eco-friendly and efficient industrial processes.",
    },

    {
      title: "Hazardous Waste Recycling",
      description:
        "Authorized recycling and management of hazardous industrial waste with environmental compliance.",
    },

    {
      title: "Industrial Oil Processing",
      description:
        "High-quality processing and purification services for industrial lubricants and oils.",
    },

    {
      title: "Eco-Friendly Waste Management",
      description:
        "Sustainable and environmentally responsible waste management solutions for industries.",
    },
  ];

  return (
    <section
      id="services"
      style={{
        padding: "100px 40px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          marginBottom: "60px",
        }}
      >
        Our Services
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(260px,1fr))",
          gap: "30px",
          maxWidth: "1300px",
          margin: "auto",
          alignItems: "start",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() =>
              setActiveIndex(
                activeIndex === index ? null : index
              )
            }
            style={{
              backgroundColor: "#07122b",
              color: "white",
              padding: "35px",
              borderRadius: "25px",
              cursor: "pointer",
              transition: "0.4s",
              minHeight: "180px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                marginBottom:
                  activeIndex === index ? "25px" : "0px",
                textAlign: "center",
                lineHeight: "1.3",
              }}
            >
              {service.title}
            </h2>

            {activeIndex === index && (
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.9",
                  textAlign: "center",
                  color: "#dbeafe",
                }}
              >
                {service.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;