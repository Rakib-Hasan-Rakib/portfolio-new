import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="nav-container flex justify-center items-center w-full">
        <div className="nav-background my-4 px-12 py-4 rounded-full">
          <ul className="flex justify-center items-center gap-4 lg:gap-8 text-white text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
