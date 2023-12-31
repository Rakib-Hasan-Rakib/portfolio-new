import { Toaster } from "react-hot-toast";
import "./App.css";
import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import { HashLink } from "react-router-hash-link";
import Achievements from "./components/achievements/Achievements";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-11/12 xl:w-10/12 mx-auto space-y-20">
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </div>
      <Footer />
      <HashLink
        to="#contact"
        className="hire-btn fixed bottom-5 right-6 px-6 py-2 rounded-3xl text-white text-lg font-semibold"
      >
        Hire Me
      </HashLink>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
