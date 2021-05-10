import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./component/Menu";
import Home from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import Works from "./component/Works";
import Blogs from "./component/Blogs";
import Contact from "./component/Contact";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Route exact path="/react-portfolio/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      <Route path="/works" component={Works} />
      <Route path="/blogs" component={Blogs} />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
