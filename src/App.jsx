import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Service from "./components/Service.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Explore from "./components/Explore.jsx";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/explore"
          element={
            <>
              <Navbar />
              <Explore />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;