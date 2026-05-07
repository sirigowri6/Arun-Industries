import { useState } from "react";

function Service() {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: "Re-refining of Used Oil",
      details:
        "We specialize in re-refining used lubricating oils using advanced vacuum distillation technology while ensuring environmentally safe operations.",
    },

    {
      title: "Recycling of Lubricating Oils",
      details:
        "Arun Industries undertakes recycling of once-used lubricating oils to reduce environmental pollution and conserve natural resources.",
    },

    {
      title: "Recycling of Insulating Oils",
      details:
        "We process and recycle insulating oils through safe and sustainable refining procedures meeting industrial standards.",
    },

    {
      title: "Hazardous Waste Management",
      details:
        "Our facility includes environmentally sound hazardous waste management systems approved by KSPCB/CPCB authorities.",
    },

    {
      title: "Used Oil Transportation",
      details:
        "Dedicated vehicles are available for safe transportation and collection of hazardous used oils from industries and plants.",
    },

    {
      title: "Vacuum Distillation Technology",
      details:
        "Our recycling process uses advanced vacuum distillation systems ensuring high-quality refined oil with minimal environmental impact.",
    },
  ];

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
          maxWidth: "1100px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "30px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => toggleCard(index)}
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "20px",
              cursor: "pointer",
              transition: "0.4s",
              boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                marginBottom: "20px",
                color: "#111827",
              }}
            >
              {service.title}
            </h2>

            {activeIndex === index && (
              <p
                style={{
                  lineHeight: "1.8",
                  color: "#444",
                  fontSize: "17px",
                }}
              >
                {service.details}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;