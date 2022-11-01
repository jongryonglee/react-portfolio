import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./component/Menu";
import Home from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import Works from "./component/Works";
// import Blogs from "./component/Blogs";
import Contact from "./component/Contact";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
      <Route exact path="/react-portfolio/" component={Home} />
      <Route path="/react-portfolio/about" component={About} />
      <Route path="/react-portfolio/skills" component={Skills} />
      <Route path="/react-portfolio/works" component={Works} />
      {/* <Route path="/react-portfolio/blogs" component={Blogs} /> */}
      </Switch>
      <Contact />
    </BrowserRouter>
  );
}

export default App;

//
