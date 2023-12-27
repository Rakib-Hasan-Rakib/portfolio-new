import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-10/12 mx-auto">
        <Banner />
      </div>
    </>
  );
}

export default App;
