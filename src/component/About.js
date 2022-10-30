import { Grid, makeStyles, Typography } from "@material-ui/core";
import posed from "react-pose";
import profile from "../images/profile.jpg";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  root: {
    backgroundColor: "rgb(239, 71, 111)",
    width: "100%",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  gridContainer: {
    backgroundColor: "white",
    width: "80%",
    margin: "0 auto",
    borderRadius: "15px",
    padding: "150px 50px",
    "@media (max-width:959px)": { padding: "50px 25px" },
    "@media (max-width:599px)": { width: "90%", padding: "50px 0px" },
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
  img: {
    height: 200,
    width: 200,
    borderRadius: "50%",
    border: "solid 5px rgb(239, 71, 111)",
  },
  title: {
    fontWeight: "900",
    borderBottom: "solid 3px #ddd",
    marginBottom: "20px",
    color: "rgb(239, 71, 111)",
  },
  name: {
    fontWeight: "900",
    marginBottom: "20px",
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

function About() {
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
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              className={classes.contentContainer}
            >
              <Typography variant="h5" component="h3" className={classes.name}>
                const myName =
              </Typography>
              <Typography variant="h4" component="h3" className={classes.name}>
                "Jongryong Lee"
              </Typography>
              <img src={profile} alt="" className={classes.img} />
            </Grid>
            <Grid item xs={12} sm={12} md={4} className={classes.textContainer}>
              <Typography variant="h4" component="h3" className={classes.title}>
                Profile
              </Typography>
              <Typography>
                Hello, My name is Jon Lee.
                I am Korean and I was born and raised in Japan.
                When I turned 19, I decided to come to the United States to make myself better. 
                I went to a language school for a half year, Grossmont College for 3 years, and transferred to SDSU as a junior and I’m here now.

              </Typography>
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
}

export default About;
