import { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  const [clickedID, setID] = useState("");

  const handleClicked = (e) => {
    const id = e.currentTarget.id;
    setID(id);
  };
  return (
    <div>
      <nav className="menu-nav">
        <ul className="list-menu">
          <li id="1" onClick={handleClicked}>
            <Link
              className={
                clickedID === "1" ? "list-link-on -home" : "list-link home"
              }
              to="/react-portfolio/"
            >
              HOME
            </Link>
          </li>
          <li id="2" onClick={handleClicked}>
            <Link
              className={
                clickedID === "2" ? "list-link-on -about" : "list-link about"
              }
              to="/react-portfolio/about"
            >
              ABOUT
            </Link>
          </li>
          <li id="3" onClick={handleClicked}>
            <Link
              className={
                clickedID === "3" ? "list-link-on -skills" : "list-link skills"
              }
              to="/react-portfolio/skills"
            >
              SKILLS
            </Link>
          </li>
          <li id="4" onClick={handleClicked}>
            <Link
              className={
                clickedID === "4" ? "list-link-on -works" : "list-link works"
              }
              to="/react-portfolio/works"
            >
              WORKS
            </Link>
          </li>
          {/* <li id="5" onClick={handleClicked}>
            <Link
              className={
                clickedID === "5" ? "list-link-on -blogs" : "list-link blogs"
              }
              to="/react-portfolio/blogs"
            >
              BLOGS
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
export default Menu;

//
