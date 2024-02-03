import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" text-white  py-4 bg-gray-900 rounded-lg mt-12">
        <div className="flex flex-col lg:flex-row justify-center gap-4 md:gap-6 lg:gap-12 px-4">
          <div>
            <h4 className="name text-4xl font-semibold tracking-widest">
              Rakibul Hasan
            </h4>
            <p className="mern-title">MERN Stack Developer</p>
          </div>
          <div>
            <div className="flex gap-2 items-center group">
              <AiOutlineMail
                size={20}
                className="text-white group-hover:text-red-500"
              />
              rakibulhasan4003@gmail.com
            </div>
            <div className="flex gap-2 items-center group">
              <FaWhatsapp
                size={20}
                className="text-white group-hover:text-green-600"
              />
              +8801865215782
            </div>
            <div className="flex gap-4 items-center my-2">
              <Link
                to="https://www.linkedin.com/in/rakibul-hasan-10a1b9274/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.ibb.co/Q6TTFRr/linkedIn.png"
                  alt="linkedin icon"
                  className="w-10 grayscale hover:grayscale-0 hover:duration-500"
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
                  className="w-8 grayscale hover:grayscale-0 hover:duration-500"
                  title="visit facebook profile"
                />
              </Link>
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
                to="https://stackoverflow.com/users/19751876/rakib-hasan-rakib"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.ibb.co/NmwKD4M/stack-overflow.png"
                  alt="stack overflow icon"
                  className="w-10 grayscale hover:grayscale-0 hover:duration-500"
                  title="visit github profile"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
