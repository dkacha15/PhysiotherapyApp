import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headerBox: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row",
    display: "flex",
    backgroundColor: "#ffffff",
  },

  icon: {
    flex: 0.2,
    alignSelf: "center",
  },
  links: {
    flex: 0.8,
    margin: 10,
    alignSelf: "flex-end",
    flexDirection: "row",
    display: "flex",
    justifyItems: "center",
  },
  headerBtn: {
    flex: 0.25,
  },
}));

export { useStyles };
