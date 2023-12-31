import AboutText from "./AboutText";
import aboutImg from "../../assets/images/about-img.png";
import ReactParallaxTilt from "react-parallax-tilt";

const About = () => {
  return (
    <div id="about">
      <div className="section-title text-6xl lg:text-8xl uppercase font-bold pb-6">
        <h1>About me</h1>
        <h1>About me</h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="basis-1/3 rounded-xl">
          <ReactParallaxTilt>
            <img
              src={aboutImg}
              alt="author image"
              className="w-60 md:w-80 lg:w-full rounded-xl "
            />
          </ReactParallaxTilt>
        </div>
        <div className="basis-2/3">
          <AboutText />
        </div>
      </div>
    </div>
  );
};
export default About;
