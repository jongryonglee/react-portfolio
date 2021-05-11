import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Grid, Typography } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "white",
    borderRadius: "10px",
    border: "2px solid #000",
    width: "80%",
    height: "80%",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
  },
  img: {
    width: "80%",
    height: "90%",
    borderRadius: "10px",
    border: "solid 3px #ddd",
  },
  description: {
    wordBreak: "break-all",
    textAlign: "left",
    padding: "20px",
  },
  title: {
    fontWeight: "900",
    color: "rgb(6, 214, 160)",
    borderBottom: "solid 3px #ddd",
  },
}));

function CardModal(props) {
  const classes = useStyles();
  const { onClose, open } = props;

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <a href={props.demo}>
                <img src={props.img} alt="" className={classes.img} />
              </a>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography
                  variant="h4"
                  component="h3"
                  className={classes.title}
                >
                  Title: {props.title}
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  className={classes.description}
                  color="textSecondary"
                >
                  {props.text}
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  variant="h4"
                  component="h3"
                  className={classes.title}
                >
                  Languages
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.description}
                  color="textSecondary"
                >
                  {props.languages}
                </Typography>
                <Typography variant="body1" className={classes.description}>
                  <a href={props.demo}>
                    <BsFillCameraVideoFill />
                    demo
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href={props.github}>
                    <AiFillGithub />
                    github
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Fade>
    </Modal>
  );
}

CardModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default CardModal;