import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Showcase from "./components/Showcase/Showcase";
import Skills from "./components/Skills/Skills";
import Services from "./components/Servicesp/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    function checkThemePreference() {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (prefersDarkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }

    checkThemePreference();
  }, []);

  return (
    <div>
      <Header />
      <Showcase />
      <About />
      <Skills />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
