import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "10px auto",
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px;",
  },
  imgContainer: {
    textAlign: "center",
  },
  img1: {
    width: 150,
  },
  img2: {
    width: "95%",
    border: "solid 2px gray",
    borderRadius: "5px",
    boxShadow: "rgb(38, 57, 77) 0px 10px 10px -10px;",
  },
  title: {
    borderBottom: "solid 4px gray",
  },
  description: {
    wordBreak: "break-all",
  },
});

function MyCard(props) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <div className={classes.imgContainer}>
              <img
                src={props.img}
                alt=""
                className={props.kind === "1" ? classes.img1 : classes.img2}
              />
            </div>

            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title}
            >
              {props.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.description}
            >
              {props.text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default MyCard;
