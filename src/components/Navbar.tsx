import { IoMdArrowDropdown } from "react-icons/io";
import logo from "../assets/logo.svg";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="" />
        </div>
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search for your favorite groups in ATG"
          />
        </div>
        <div className="navbar-account">
          <a href="#">
            Create account. <span className="highlight">It's free!</span>{" "}
            <IoMdArrowDropdown />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
