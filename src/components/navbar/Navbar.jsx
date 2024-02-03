import { HashLink, NavHashLink } from "react-router-hash-link";
import "./navbar.css";
import Headroom from "react-headroom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Headroom>
        <nav className="nav-container text-white md:flex justify-center items-center w-full my-1">
          <FaBars onClick={() => setMenuOpen(true)} size={28} className="" />
          <AiOutlineCloseCircle onClick={() => setMenuOpen(false)} />
          <div className="nav-background my-4 px-6 md:px-12 py-4 rounded-full">
            <ul
              className={`${menuOpen? 'list-none':'hidden'} md:flex justify-center items-center gap-4 lg:gap-8  text-white text-sm`}
            >
              <NavHashLink
                to="#"
              >
                Home
              </NavHashLink>
              <NavHashLink
                to="#about"
              >
                About
              </NavHashLink>
              <NavHashLink
                to="#skills"
              >
                Skills
              </NavHashLink>
              <NavHashLink
                to="#projects"
              >
                Projects
              </NavHashLink>
              <NavHashLink
                to="#info"
              >
                Info
              </NavHashLink>
              <NavHashLink
                to="#contact"
              >
                Contact
              </NavHashLink>
            </ul>
          </div>
        </nav>
      </Headroom>
    </>
  );
};
export default Navbar;
