import "./Home.css";
import FaceLogo from "../images/FaceLogo.png";
import MovingComponent from "react-moving-text";

function Home() {
  return (
    <div className="home-container">
      <div className="text-container">
        <MovingComponent
          className="welcome"
          type="fadeInFromRight"
          duration="3s"
          delay="0s"
          direction="normal"
          timing="ease-in"
          iteration="1"
          fillMode="none"
        >
          <h1>WELCOME!</h1>
        </MovingComponent>
      </div>
      <div className="face-container">
        <img src={FaceLogo} alt="" className="face-img" />
      </div>
    </div>
  );
}

export default Home;
