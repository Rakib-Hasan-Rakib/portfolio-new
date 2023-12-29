import { HashLink } from "react-router-hash-link";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="nav-container flex justify-center items-center w-full">
        <div className="nav-background my-4 px-12 py-4 rounded-full">
          <ul className="flex justify-center items-center gap-4 lg:gap-8 text-white text-sm">
            <HashLink to="#home">Home</HashLink>
            <HashLink to="#about">About</HashLink>
            <HashLink to="#skills">Skills</HashLink>
            <HashLink to="#projects">Projects</HashLink>
            <HashLink to="#contact">Contact</HashLink>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
