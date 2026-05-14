import logo from "../assets/logo.png"; 
function Navbar() {
   return ( 
   <nav 
   style={{ position: "fixed",
     top: 0, 
     left: 0, 
     width: "100%", 
     backgroundColor: "#111827", 
     padding: "20px 40px", 
     display: "flex", 
     justifyContent: "space-between", 
     alignItems: "center", 
     zIndex: 1000, 
     boxSizing: "border-box", 
    }} 
    > 
    <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "12px",
  }}
>
  <img
    src={logo}
    alt="Arun Industries Logo"
    style={{
      width: "52px",
      height: "52px",
      objectFit: "contain",
    }}
  />

  <h1
    style={{
      color: "white",
      margin: 0,
      fontSize: "28px",
      fontWeight: "bold",
    }}
  >
    Arun Industries
  </h1>
</div> 
    <div 
    style={{ 
      display: "flex", 
      gap: "20px", 
      alignItems: "center", 
    }} 
    > 
    <a href="/" style={linkStyle}>
     Home
    </a> 

    <a href="#about" style={linkStyle}>
      About 
       </a> 
       
       <a href="#services" style={linkStyle}> 
        Services 
        </a>
        
         <a href="#contact" style={linkStyle}> 
          Contact 
          </a> 
          
          <a href="/explore" 
          style={{ 
            backgroundColor: "#00bfff", 
            color: "white", 
            padding: "10px 22px", 
            borderRadius: "30px", 
            textDecoration: "none", 
            fontWeight: "bold", 
          }} 
          > 
          Explore 
          </a> 
          </div> 
          </nav> 
          ); 
        } 
        const linkStyle = { 
          color: "white", 
          textDecoration: "none", 
          fontSize: "16px", 
        }; 
export default Navbar;