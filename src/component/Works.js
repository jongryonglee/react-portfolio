import MyCard from "./MyCard";
import portfolio from "../images/portfolio.jpg";
import TicToc from "../images/tictoctoe.jpg";
import todoList from "../images/todolist.png";
import map from "../images/map.jpg";
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

function Works() {
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(!isVisible);
    }, 500);
  }, []);
  return (
    <Box className="name" pose={isVisible ? "visible" : "hidden"}>
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard
            img={portfolio}
            title={"Portfolio"}
            text={"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}
            kind={"2"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard img={TicToc} title={"Tic Toc Toe"} text={"description"} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard
            img={map}
            title={"Location Sharing App"}
            text={"description"}
            kind={"2"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MyCard
            img={todoList}
            title={"React ToDo List"}
            text={"description"}
            kind={"2"}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Works;
