function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 40px",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "50px", marginBottom: "40px" }}>
        Contact Us
      </h1>

      <p style={{ fontSize: "22px", lineHeight: "2" }}>
        Arun Industries <br />
        Lubricating Oil Refineries <br />
        B-64, 3rd Stage, Peenya Industrial Area, <br />
        Bangalore, Karnataka - 560058, India <br /><br />

        📞 +91 98456 95564 <br />
        📞 +91 80411 70031 <br />
        📞 +91 72598 03877 <br /><br />

        ✉️ arunindustrieskumar@yahoo.co.in
      </p>
    <div
        style={{
          marginTop: "50px",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
          maxWidth: "1000px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.924554146149!2d77.49693487484228!3d13.01891088730082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3df8f160918d%3A0x12bb0e666c054de9!2sArun%20industries!5e1!3m2!1sen!2sin!4v1778177118094!5m2!1sen!2sin"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Arun Industries Location"
></iframe>
      </div>
    </section>
  );
}

export default Contact;
  