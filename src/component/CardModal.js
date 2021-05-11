import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Grid } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

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
    height: "90%",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
  },
  box: {
    borderRight: "solid 1px #ddd",
  },
  img: {
    width: "80%",
    height: "100%",
    borderRadius: "10px",
  },
  description: {
    wordBreak: "break-all",
    textAlign: "left",
    padding: "20px",
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
              <img src={props.img} alt="" className={classes.img} />
            </Grid>

            <Grid item xs={6} className={classes.box}>
              <h1 id="transition-modal-description" className={classes.title}>
                Title: {props.title}
              </h1>
              <p className={classes.description}>{props.text}</p>
              <a href={props.demo}>demo </a>
              <a href={props.github}>github</a>
            </Grid>

            <Grid item xs={6}>
              <h1>Languages</h1>
              <p className={classes.description}>{props.languages}</p>
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
