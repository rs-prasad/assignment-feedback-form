import "./Navbar.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Navbar = () => {
  //hooks
  const form = useRef("");
  const table = useRef("");

  const handleClick = (e) => {
    form.current.classList.remove("navbar_option--selected");
    table.current.classList.remove("navbar_option--selected");
    e.target.classList.add("navbar_option--selected");
    console.log(e.target);
  };
  return (
    <div className="navbar">
      <ul className="navbar__navbar_list">
        <Link to="./">
          <li
            ref={form}
            className="navbar_option--selected"
            onClick={(e) => handleClick(e)}
          >
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
