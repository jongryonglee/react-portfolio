import { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  const [flag1, setFlag1] = useState(false);
  const handleClick1 = () => {
    setFlag1(true);
    setFlag2(false);
    setFlag3(false);
    setFlag4(false);
    setFlag5(false);
  };
  const [flag2, setFlag2] = useState(false);
  const handleClick2 = () => {
    setFlag1(false);
    setFlag2(true);
    setFlag3(false);
    setFlag4(false);
    setFlag5(false);
  };
  const [flag3, setFlag3] = useState(false);
  const handleClick3 = () => {
    setFlag1(false);
    setFlag2(false);
    setFlag3(true);
    setFlag4(false);
    setFlag5(false);
  };
  const [flag4, setFlag4] = useState(false);
  const handleClick4 = () => {
    setFlag1(false);
    setFlag2(false);
    setFlag3(false);
    setFlag4(true);
    setFlag5(false);
  };
  const [flag5, setFlag5] = useState(false);
  const handleClick5 = () => {
    setFlag1(false);
    setFlag2(false);
    setFlag3(false);
    setFlag4(false);
    setFlag5(true);
  };
  return (
    <div>
      <nav className="menu-nav">
        <ul className="list-menu">
          <li className="list-item">
            <Link
              className={flag1 ? "list-link-on" : "list-link"}
              onClick={handleClick1}
              to="/react-portfolio/"
            >
              HOME
            </Link>
          </li>
          <li className="list-item">
            <Link
              className={flag2 ? "list-link-on" : "list-link"}
              onClick={handleClick2}
              to="/react-portfolio/about"
            >
              ABOUT
            </Link>
          </li>
          <li className="list-item">
            <Link
              className={flag3 ? "list-link-on" : "list-link"}
              onClick={handleClick3}
              to="/react-portfolio/skills"
            >
              SKILLS
            </Link>
          </li>
          <li className="list-item">
            <Link
              className={flag4 ? "list-link-on" : "list-link"}
              onClick={handleClick4}
              to="/react-portfolio/works"
            >
              WORKS
            </Link>
          </li>
          <li className="list-item">
            <Link
              className={flag5 ? "list-link-on" : "list-link"}
              onClick={handleClick5}
              to="/react-portfolio/blogs"
            >
              BLOGS
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Menu;
