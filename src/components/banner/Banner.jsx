// import bannerOne from "../../assets/images/Banner-one.png";
import { Link } from "react-router-dom";
import bannerTwo from "../../assets/images/Banner-two.png";
import "./banner.css";
import ReactParallaxTilt from "react-parallax-tilt";

const Banner = () => {
  return (
    <>
      <div
        className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center gap-6 my-12 md:my-16 lg:my-24 xl:my-32"
        id="home"
      >
        <div className="lg:basis-1/2 text-white">
          <h1 className="text-5xl md:text-6xl font-bold">
            Need an expert<span className="mern bg-transparent"> MERN </span>
            stack developer?
          </h1>
          <p className="my-4 text-justify">
            I'm a passionate MERN stack developer dedicated to crafting
            immersive, dynamic, and high-performing web applications. With
            expertise in MongoDB, Express.js, React, and Node.js, I specialize
            in building robust and scalable solutions that resonate with user
            needs and industry standards. Let's collaborate to transform your
            vision into an exceptional digital reality.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="https://github.com/Rakib-Hasan-Rakib"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.ibb.co/bsx7cx7/github.png"
                alt="github icon"
                className="w-8"
                title="visit github profile"
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/rakibul-hasan-10a1b9274/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.ibb.co/Q6TTFRr/linkedIn.png"
                alt="linkedin icon"
                className="w-10"
                title="visit linkedIn profile"
              />
            </Link>

            <Link
              to="https://www.facebook.com/rk.rakib.180625"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.ibb.co/Jypsrh5/facebook-icon.png"
                alt="facebook icon"
                className="w-8"
                title="visit facebook profile"
              />
            </Link>
            <Link
              to="https://drive.google.com/file/d/1vtckCk2bWsaiqfPIusUUQA7Iqmqd-vLX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.ibb.co/QmMsmx3/resume.jpg"
                alt="resume icon"
                className="w-8 rounded-lg"
                title="view my resume"
              />
            </Link>
          </div>
        </div>
        <div className="lg:basis-1/2 flex justify-center items-center lg:justify-end img-container">
          <ReactParallaxTilt>
            <img
              src={bannerTwo}
              alt="author image"
              className="banner-image rounded-xl w-full md:w-[400px]"
            />
          </ReactParallaxTilt>
        </div>
      </div>
    </>
  );
};
export default Banner;
