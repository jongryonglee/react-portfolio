import { Grid, makeStyles, Typography } from "@material-ui/core";
import posed from "react-pose";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  root: {
    backgroundColor: "rgb(17, 138, 178)",
    width: "100%",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  gridContainer: {
    backgroundColor: "white",
    width: "80%",
    margin: "0 auto",
    borderRadius: "15px",
    padding: "200px 50px",
    "@media (max-width:959px)": { padding: "100px 25px" },
    "@media (max-width:599px)": { width: "90%", padding: "100px 0px" },
  },
  contentContainer: {
    padding: "10px",
    textAlign: "center",
    margin: "10px",
  },
  textContainer: {
    padding: "10px",
    margin: "10px",
  },
  text: {
    fontWeight: "900",
    marginBottom: "20px",
    color: "rgb(17, 138, 178)",
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

function Blogs() {
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
        <div className={classes.gridContainer}>
          <Grid container justify="space-around">
            <Grid item xs={12} className={classes.contentContainer}>
              <Typography variant="h5" component="h3" className={classes.text}>
                Coming Soon...
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
}

export default Blogs;
