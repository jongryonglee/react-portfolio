import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Menu from "./component/Menu";
import Home from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import Works from "./component/Works";
// import Blogs from "./component/Blogs";
import Contact from "./component/Contact";

function App() {
  return (
    <HashRouter basename="react-portfolio">
      <Menu />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      <Route path="/works" component={Works} />
      {/* <Route path="/react-portfolio/blogs" component={Blogs} /> */}
      </Switch>
      <Contact />
    </HashRouter>
  );
}

export default App;

//
