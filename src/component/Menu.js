import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <div>
      <nav className="menu-nav">
        <ul className="list-menu">
          <li className="list-item">
            <Link className="list-link" to="/react-portfolio/">
              HOME
            </Link>
          </li>
          <li className="list-item">
            <Link className="list-link" to="/react-portfolio/about">
              ABOUT
            </Link>
          </li>
          <li className="list-item">
            <Link className="list-link" to="/react-portfolio/skills">
              SKILLS
            </Link>
          </li>
          <li className="list-item">
            <Link className="list-link" to="/react-portfolio/works">
              WORKS
            </Link>
          </li>
          <li className="list-item">
            <Link className="list-link" to="/react-portfolio/blogs">
              BLOGS
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Menu;

//
