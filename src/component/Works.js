import ImgCard from "./ImgCard";
import portfolio from "../images/portfolio.jpg";
import TicToc from "../images/tictoctoe.jpg";
import todoList from "../images/todolist.png";
import reactPortfolio from "../images/reactPortfolio.jpg";
import KickOffReturn from "../images/KickOffReturn.mov";
import KORImg from "../images/KickOffReturnImg.jpg";
import map from "../images/map.jpg";
import { Grid, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import posed from "react-pose";
import CardModal from "./CardModal";
import VideoModal from "./VideoModal";
import clickIcon from "../images/cursorArrow.png";

const useStyles = makeStyles({
  root: {
    backgroundColor: "rgb(6, 214, 160)",
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

function Works() {
  const classes = useStyles();
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
      case "6":
        return (
          <CardModal
            open={open}
            onClose={handleClose}
            img={portfolio}
            title={"Portfolio"}
            text={"My first portfolio site coded with only HTML&CSS."}
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
              "Tic Toc Toe game coded with JavaScript that can save scores into local storage."
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
              "Location Sharing App coded with JavaScript that can search current location and make an url of the location that is pointed on the map. I used Google Map API for this app."
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
              "This React ToDo List App is my first React project. This app allows user to create, edit, delete, and check to delete a task to do."
            }
            languages={"HTML, CSS, JavaScript, React"}
            demo={"https://jongryonglee.github.io/react-todolist/"}
            github={"https://github.com/jongryonglee/react-todolist"}
          />
        );

      case "5":
        return (
          <CardModal
            open={open}
            onClose={handleClose}
            img={reactPortfolio}
            title={"React Portfolio"}
            text={"I created new style portfolio with React."}
            languages={"HTML, CSS, JavaScript, React"}
            demo={"https://jongryonglee.github.io/react-portfolio/"}
            github={"https://github.com/jongryonglee/react-portfolio"}
          />
        );

        case "1":
          return (
            <VideoModal
              open={open}
              onClose={handleClose}
              img={KickOffReturn}
              title={"Kick Off Return"}
              text={"I created a 3D video game by using Unity Engine with 3 people in a group."}
              languages={"C#, Unity"}
              github={"https://github.com/jongryonglee/cs583_kickoffreturn"}
            />
          );

      default:
        return <></>;
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
    <div className={classes.root}>
      <Box pose={isVisible ? "visible" : "hidden"}>
        <Grid container>
        <Grid item xs={12} sm={6} md={4}>
            <div id="1" onClick={handleClicked}>
              <ImgCard
                img={KORImg}
                title={"Kick Off Return"}
                text={"Click to show details"}
                kind={"2"}
                icon={clickIcon}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div id="2" onClick={handleClicked}>
              <ImgCard
                img={TicToc}
                title={"Tic Toc Toe"}
                text={"Click to show details"}
                kind={"2"}
                icon={clickIcon}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div id="3" onClick={handleClicked}>
              <ImgCard
                img={map}
                title={"Location Sharing App"}
                text={"Click to show details"}
                kind={"2"}
                icon={clickIcon}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div id="4" onClick={handleClicked}>
              <ImgCard
                img={todoList}
                title={"React ToDo List"}
                text={"Click to show details"}
                kind={"2"}
                icon={clickIcon}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div id="5" onClick={handleClicked}>
              <ImgCard
                img={reactPortfolio}
                title={"React Portfolio"}
                text={"Click to show details"}
                kind={"2"}
                icon={clickIcon}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div id="6" onClick={handleClicked}>
              <ImgCard
                img={portfolio}
                title={"Portfolio"}
                text={"Click to show details"}
                kind={"2"}
                icon={clickIcon}
              />
            </div>
          </Grid>
          {renderSwitch(clickedID)}
        </Grid>
      </Box>
    </div>
  );
}

export default Works;
