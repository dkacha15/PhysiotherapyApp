import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  image: {
    height: 500,
    display: "block",
    maxWidth: 1200,
    overflow: "hidden",
    width: "100%",
    padding: 120,
    paddingTop: 20,
    paddingBottom: 20,
  },
  stepper:{ backgroundColor: "#ffffff" },
}));

export { useStyles };
