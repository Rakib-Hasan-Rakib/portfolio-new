import { NavHashLink } from "react-router-hash-link";
import "./navbar.css";
import Headroom from "react-headroom";

const Navbar = () => {

  return (
    <>
      <Headroom>
        <nav className="nav-container text-white md:flex justify-center items-center w-full my-1">
          <div
            className={`nav-background my-4 px-6 md:px-12 py-4 rounded-full`}
          >
            <ul
              className={`flex flex-row justify-center items-center gap-4 lg:gap-8  text-white text-sm`}
            >
              <NavHashLink to="#">Home</NavHashLink>
              <NavHashLink to="#about">About</NavHashLink>
              <NavHashLink to="#skills">Skills</NavHashLink>
              <NavHashLink to="#projects">Projects</NavHashLink>
              <NavHashLink to="#info">Info</NavHashLink>
              <NavHashLink to="#contact">Contact</NavHashLink>
            </ul>
          </div>
        </nav>
      </Headroom>
    </>
  );
};
export default Navbar;
