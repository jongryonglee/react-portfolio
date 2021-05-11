import MyCard from "./MyCard";
import portfolio from "../images/portfolio.jpg";
import TicToc from "../images/tictoctoe.jpg";
import todoList from "../images/todolist.png";
import map from "../images/map.jpg";
import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import posed from "react-pose";
import CardModal from "./CardModal";

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
  const [open, setOpen] = useState(false);
  const [clickedID, setID] = useState("");

  const handleClicked = (e) => {
    const id = e.currentTarget.id;
    setID(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderSwitch = (id) => {
    switch (id) {
      case "1":
        return (
          <CardModal
            open={open}
            onClose={handleClose}
            img={portfolio}
            title={"Portfolio"}
            text={
              "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            }
            languages={"HTML, CSS"}
            demo={"https://jongryonglee.github.io/Portfolio/"}
            github={"https://github.com/jongryonglee/Portfolio"}
          />
        );

      case "2":
        return (
          <CardModal
            open={open}
            onClose={handleClose}
            img={TicToc}
            title={"Tic Toc Toe"}
            text={
              "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            }
            languages={"HTML, CSS, JavaScript"}
            demo={"https://jongryonglee.github.io/tictoctoe/"}
            github={"https://github.com/jongryonglee/tictoctoe"}
          />
        );
      case "3":
        return (
          <CardModal
            open={open}
            onClose={handleClose}
            img={map}
            title={"Location Sharing App"}
            text={
              "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            }
            languages={"HTML, CSS, JavaScript"}
            github={"https://github.com/jongryonglee/locationsharing"}
          />
        );
      case "4":
        return (
          <CardModal
            open={open}
            onClose={handleClose}
            img={todoList}
            title={"React ToDo List"}
            text={
              "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            }
            languages={"HTML, CSS, JavaScript, React"}
            demo={"https://jongryonglee.github.io/react-todolist/"}
            github={"https://github.com/jongryonglee/react-todolist"}
          />
        );

      default:
        return "foo";
    }
  };

  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(!isVisible);
    }, 500);
    // eslint-disable-next-line
  }, []);

  return (
    <Box className="name" pose={isVisible ? "visible" : "hidden"}>
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <div id="1" onClick={handleClicked}>
            <MyCard
              img={portfolio}
              title={"Portfolio"}
              text={"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}
              kind={"2"}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div id="2" onClick={handleClicked}>
            <MyCard
              img={TicToc}
              title={"Tic Toc Toe"}
              text={"description"}
              kind={"2"}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div id="3" onClick={handleClicked}>
            <MyCard
              img={map}
              title={"Location Sharing App"}
              text={"description"}
              kind={"2"}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div id="4" onClick={handleClicked}>
            <MyCard
              img={todoList}
              title={"React ToDo List"}
              text={"description"}
              kind={"2"}
            />
          </div>
        </Grid>
        {renderSwitch(clickedID)}
      </Grid>
    </Box>
  );
}

export default Works;
