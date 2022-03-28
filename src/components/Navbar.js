import "./Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Navbar = () => {
  //hooks
  const form = useRef("");
  const table = useRef("");
  useEffect(() => {
    if (window.location.pathname.length === 1) {
      form.current.classList.add("navbar_option--selected");
    } else {
      table.current.classList.add("navbar_option--selected");
    }
  }, []);

  // handles
  const handleClick = (e) => {
    form.current.classList.remove("navbar_option--selected");
    table.current.classList.remove("navbar_option--selected");
    e.target.classList.add("navbar_option--selected");
  };
  return (
    <div className="navbar">
      <ul className="navbar__navbar_list">
        <Link to="./">
          <li ref={form} onClick={(e) => handleClick(e)}>
            Form
          </li>
        </Link>
        <Link to="./table" onClick={(e) => handleClick(e)}>
          <li ref={table}>Table</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
