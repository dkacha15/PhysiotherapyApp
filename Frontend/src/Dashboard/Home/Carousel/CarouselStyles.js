import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  image: {
    display: "block",
    "@media (min-width:780px)": {
      width: 1200,
      height: 570,
    },
    overflow: "hidden",
    width: "100%",
    height: 200,
  },
  stepper: { backgroundColor: "#ffffff" },
}));

export { useStyles };
