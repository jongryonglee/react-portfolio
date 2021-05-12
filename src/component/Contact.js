import "./Contact.css";
import email from "../images/email.png";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import github from "..//images/github.png";

function Contact() {
  return (
    <div>
      <nav className="contact-nav">
        <ul className="contact-menu">
          <li className="contact-item">
            <a href="mailto:jongryonglee7@gmail.com">
              <img className="email" src={email} alt=""></img>
            </a>
          </li>
          <li className="contact-item">
            <a href="https://www.instagram.com/jon_ryon_0714/?hl=ja">
              <img className="instagram" src={instagram} alt=""></img>
            </a>
          </li>
          <li className="contact-item">
            <a href="https://www.facebook.com/profile.php?id=100009588462001">
              <img className="facebook" src={facebook} alt=""></img>
            </a>
          </li>
          <li className="contact-item">
            <a href="https://github.com/jongryonglee">
              <img className="github" src={github} alt=""></img>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Contact;
