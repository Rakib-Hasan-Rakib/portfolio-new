import AboutText from "./AboutText";
import aboutImg from "../../assets/images/about-img.png";
import ReactParallaxTilt from "react-parallax-tilt";

const About = () => {
  return (
    <div className="my-3">
      <div className="about-heading text-8xl uppercase font-bold">
        <h1>About me</h1>
        <h1>About me</h1>
      </div>

      <div className="flex items-center gap-6 py-20">
        <div className="basis-1/3 rounded-xl">
          <ReactParallaxTilt>
            <img src={aboutImg} alt="author image" className="rounded-xl" />
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
