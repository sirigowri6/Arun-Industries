import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import refining from "../assets/refining.jpeg";
import factory2 from "../assets/factory2.jpeg";
import factory3 from "../assets/factory3.jpeg";

function Explore() {
  const slides = [
    {
      image: refining,
      title: "WHY RE-REFINING USED OIL",
      points: [
        "Used oil is one of the largest recyclable hazardous materials.",
        "Improper disposal contaminates soil and water resources.",
        "Recycling conserves valuable natural resources.",
        "Eco-friendly refining supports sustainable industries.",
      ],
    },

    {
      image: factory2,
      title: "REFINING PROCESS",
      points: [
        "Vaccuum distilation, filtration and purification process",
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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_17drusn",
        "template_n2nvijk",
        form.current,
        "oiW2I9EsIeZrCyuOc"
      )
      .then(() => {
        alert("Message Sent Successfully!");
      });

    e.target.reset();
  };

  const inputStyle = {
    padding: "18px",
    borderRadius: "12px",
    border: "1px solid #d1d5db",
    fontSize: "18px",
  };

  const textareaStyle = {
    padding: "18px",
    borderRadius: "12px",
    border: "1px solid #d1d5db",
    fontSize: "18px",
    resize: "none",
  };

  return (
    <div
      style={{
        background: "white",
        minHeight: "100vh",
      }}
    >
      {/* SLIDER SECTION */}

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
              {slides[currentSlide].points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={slides[currentSlide].image}
              alt=""
              style={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "20px",
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
                width: currentSlide === index ? "35px" : "12px",
                height: "12px",
                borderRadius: "20px",
                background:
                  currentSlide === index ? "#111827" : "#9ca3af",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </section>

      {/* INFRASTRUCTURE & SAFETY */}

<section
  style={{
    padding: "120px 60px",
    background: "#f5f7fa",
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
    <div>
      <h1
        style={{
          fontSize: "60px",
          marginBottom: "30px",
          color: "#111827",
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
        We have facility to process 720 KL of Used Oil per annum and 360 KL of used coolent processing per annum.
        Arun Industries exclusively deals with Re-refining of Used Oils.
        This activity is also extended customers who wanted to recycle
        their oils as the re-refined oil meets the BSI standards.
      </p>
    </div>

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
          boxShadow: "0 10px 35px rgba(0,0,0,0.12)",
        }}
      />
    </div>
  </div>

  {/* SAFETY */}

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
        src={factory3}
        alt=""
        style={{
          width: "100%",
          maxWidth: "520px",
          borderRadius: "20px",
          boxShadow: "0 10px 35px rgba(0,0,0,0.12)",
        }}
      />
    </div>

    <div>
      <h1
        style={{
          fontSize: "60px",
          marginBottom: "30px",
          color: "#111827",
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
        Our fundamental approach is to ensure that the entire process
        of transportion, segregation, pre-filtrion, separating pollutants, distillation
        during recycling activity ensures maximum safety to the environment.
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
        boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ marginBottom: "15px" }}>
        Company Brochure
      </h2>

      <p>
        View complete company profile and refinery operations.
      </p>
    </a>

    <a
      href="/ISO-Certificate.jpeg"
      target="_blank"
      style={{
        background: "#f5f7fa",
        padding: "35px",
        width: "320px",
        borderRadius: "20px",
        textDecoration: "none",
        color: "#111827",
        boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ marginBottom: "15px" }}>
        ISO Certificate
      </h2>

      <p>
         Industrial certifications.
      </p>
    </a>

   <a
  href="/EPR-Certificate.pdf"
  target="_blank"
  style={{
    background: "#f5f7fa",
    padding: "35px",
    width: "320px",
    borderRadius: "20px",
    textDecoration: "none",
    color: "#111827",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
  }}
>
  <h2 style={{ marginBottom: "15px" }}>
    EPR Certificate
  </h2>

  <p>
    Extended Producer Responsibility certification details.
  </p>
</a>
  </div>
</section>

      {/* MESSAGE SECTION */}

      <section
        style={{
          padding: "100px 40px",
          background: "#f5f7fa",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "55px",
              marginBottom: "25px",
              color: "#111827",
            }}
          >
            For Any Queries, Send Us a Message
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#4b5563",
              marginBottom: "50px",
            }}
          >
            Our team will get back to you shortly.
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
            }}
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              style={inputStyle}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              style={textareaStyle}
            />

            <button
              type="submit"
              style={{
                background: "#00bfff",
                color: "white",
                padding: "18px",
                border: "none",
                borderRadius: "12px",
                fontSize: "18px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Explore;