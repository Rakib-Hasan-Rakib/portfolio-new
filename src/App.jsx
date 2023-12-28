import "./App.css";
import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-10/12 mx-auto">
        <Banner />
        <About />
        <Skills />
      </div>
      <button className="hire-btn fixed bottom-10 right-10 px-6 py-2 rounded-lg text-white text-lg font-semibold">
        Hire Me
      </button>
    </>
  );
}

export default App;
