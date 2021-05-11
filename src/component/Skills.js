import MyCard from "./MyCard";
import html from "../images/htmlcss.png";
import javascript from "../images/javascript.png";
import java from "../images/java.png";
import cPlus from "../images/c++.png";
import react from "../images/react.png";
import { Grid, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import posed from "react-pose";

const useStyles = makeStyles({
  root: {
    backgroundColor: "rgb(255, 209, 102)",
  },
});

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
  const classes = useStyles();
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(!isVisible);
    }, 500);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.root}>
      <Box pose={isVisible ? "visible" : "hidden"}>
        <Grid container justify="center">
          <Grid item xs={12} sm={6} md={4}>
            <MyCard img={html} title={"HTML&CSS"} text={""} kind="1" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyCard img={javascript} title={"JavaScript"} text={""} kind="1" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyCard img={react} title={"React"} text={""} kind="1" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyCard img={java} title={"Java"} text={""} kind="1" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyCard img={cPlus} title={"C++"} text={""} kind="1" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Skills;
