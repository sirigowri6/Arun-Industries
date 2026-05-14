import { useState } from "react";

import factory1 from "../assets/factory1.jpeg";
import factory2 from "../assets/factory2.jpeg";
import factory3 from "../assets/factory3.jpeg";

function Explore() {
  const slides = [
    {
      image: factory1,
      title: "WHY REFINING USED OIL",
      points: [
        "Used oil is one of the largest recyclable hazardous materials.",
        "Improper disposal contaminates soil and water resources.",
        "Oil refining reduces industrial pollution effectively.",
        "Recycling conserves valuable natural resources.",
        "Eco-friendly refining supports sustainable industries.",
      ],
    },

    {
      image: factory2,
      title: "REFINING PROCESS",
      points: [
        "Modern filtration and purification technologies.",
        "Safe industrial oil processing systems.",
        "Environmentally responsible recycling methods.",
        "High-quality lubricant recovery process.",
        "Efficient industrial waste management operations.",
      ],
    },

    {
      image: factory3,
      title: "SUSTAINABLE INDUSTRY",
      points: [
        "CPCB authorized recycling procedures.",
        "Zero discharge environmental operations.",
        "Reduction of industrial waste pollution.",
        "Responsible hazardous waste handling systems.",
        "Commitment towards safety and sustainability.",
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div
      style={{
        background: "white",
        minHeight: "100vh",
      }}
    >
      {/* TOP SLIDER SECTION */}

      <section
        style={{
          padding: "140px 60px 100px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: "60px",
            maxWidth: "1300px",
            margin: "auto",
          }}
        >
          {/* LEFT CONTENT */}

          <div>
            <h1
              style={{
                fontSize: "65px",
                lineHeight: "1.1",
                marginBottom: "30px",
                color: "#111827",
                fontWeight: "900",
              }}
            >
              {slides[currentSlide].title}
            </h1>

            <ul
              style={{
                lineHeight: "2",
                fontSize: "20px",
                color: "#374151",
              }}
            >
              {slides[currentSlide].points.map(
                (point, index) => (
                  <li key={index}>{point}</li>
                )
              )}
            </ul>
          </div>

          {/* RIGHT IMAGE */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={slides[currentSlide].image}
              alt="factory"
              style={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "15px",
                boxShadow:
                  "0 10px 40px rgba(0,0,0,0.15)",
              }}
            />
          </div>
        </div>

        {/* DOTS */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginTop: "50px",
          }}
        >
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width:
                  currentSlide === index
                    ? "35px"
                    : "12px",

                height: "12px",
                borderRadius: "20px",

                background:
                  currentSlide === index
                    ? "#111827"
                    : "#9ca3af",

                transition: "0.4s",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </section>
<section
  style={{
    padding: "120px 60px",
    background: "#f5f7fa",
    overflow: "hidden",
  }}
>
  {/* INFRASTRUCTURE */}

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      gap: "60px",
      marginBottom: "120px",
      maxWidth: "1300px",
      marginLeft: "auto",
      marginRight: "auto",
    }}
  >
    <div
      style={{
        transform: "translateX(-20px)",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          marginBottom: "30px",
          color: "#111827",
          lineHeight: "1.2",
        }}
      >
        Modern Infrastructure
      </h1>

      <p
        style={{
          lineHeight: "2",
          color: "#4b5563",
          fontSize: "20px",
        }}
      >
      We have facility to process 720 KL of Used Oil per annum. Arun Industries exclusively deals with Re-refining of Used Oils. This activity is also extended customers who wanted to recycle their oils as the re-refined oil meets the BSI standards.
      We procure Used Oil generated from Power generating plants, Service Centers, Industries, IT Sector, Mall Etc.

      </p>
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={factory1}
        alt=""
        style={{
          width: "100%",
          maxWidth: "520px",
          borderRadius: "20px",
          boxShadow:
            "0 10px 35px rgba(0,0,0,0.12)",
        }}
      />
    </div>
  </div>

  {/* ENVIRONMENTAL SAFETY */}

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      gap: "60px",
      maxWidth: "1300px",
      margin: "auto",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={factory2}
        alt=""
        style={{
          width: "100%",
          maxWidth: "520px",
          borderRadius: "20px",
          boxShadow:
            "0 10px 35px rgba(0,0,0,0.12)",
        }}
      />
    </div>

    <div
      style={{
        transform: "translateX(20px)",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          marginBottom: "30px",
          color: "#111827",
          lineHeight: "1.2",
        }}
      >
        Environmental Safety
      </h1>

      <p
        style={{
          lineHeight: "2",
          color: "#4b5563",
          fontSize: "20px",
        }}
      >
        Our fundamental approach is to ensure that the entire process of transporting, filtering, separating pollutants, distillation during recycling activity (with 100% free pollutant release to the environment) that ensure maximum safety to the environment. The yield of refined oil from this process is 100% pollutant free and can be blended safety with virgin oil or individually.
      </p>
    </div>
  </div>
</section>

      {/* BROCHURE SECTION */}

      <section
        style={{
          padding: "80px 40px",
          background: "white",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "55px",
            marginBottom: "50px",
            color: "#111827",
          }}
        >
          Explore Arun Industries
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          {/* BROCHURE */}

          <a
            href="/company-brochure.pdf"
            target="_blank"
            style={{
              background: "#f5f7fa",
              padding: "35px",
              width: "320px",
              borderRadius: "20px",
              textDecoration: "none",
              color: "#111827",
              boxShadow:
                "0 5px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h2
              style={{
                marginBottom: "15px",
              }}
            >
              Company Brochure
            </h2>

            <p>
              View complete company profile and refinery
              operations.
            </p>
          </a>

          {/* CERTIFICATE */}

          <a
            href="/CPCB-Certificate.pdf"
            target="_blank"
            style={{
              background: "#f5f7fa",
              padding: "35px",
              width: "320px",
              borderRadius: "20px",
              textDecoration: "none",
              color: "#111827",
              boxShadow:
                "0 5px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h2
              style={{
                marginBottom: "15px",
              }}
            >
              CPCB Certificate
            </h2>

            <p>
              Authorized environmental and industrial
              certifications.
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Explore;