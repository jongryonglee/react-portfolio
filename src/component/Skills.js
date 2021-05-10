import MyCard from "./MyCard";
import html from "../images/htmlcss.png";
import javascript from "../images/javascript.png";
import java from "../images/java.png";
import cplus from "../images/c++.png";
import react from "../images/react.png";

import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import posed from "react-pose";

const Box = posed.div({
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
  },
  hidden: {
    opacity: 0,
    y: -30,
    x: -30,
  },
});

function Skills() {
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(!isVisible);
    }, 500);
    // eslint-disable-next-line
  }, []);

  return (
    <Box className="name" pose={isVisible ? "visible" : "hidden"}>
      <Grid container justify="center">
        <Grid item xs={12} sm={6} md={4}>
          <MyCard
            img={html}
            title={"HTML&CSS"}
            text={"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}
            kind="1"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard
            img={javascript}
            title={"JavaScript"}
            text={"description"}
            kind="1"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard img={react} title={"React"} text={"description"} kind="1" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard img={java} title={"Java"} text={"description"} kind="1" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard img={cplus} title={"C++"} text={"description"} kind="1" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Skills;
