import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    flexDirection: "row",
    display: "flex",
    margin: 30,
    padding: 30,
  },
  title: {
    fontSize: 28,
    fontFamily: "Raleway",
    fontWeight: "bold",
    color: "#323232",
    textAlign: "left",
    paddingBottom: 25,
    paddingTop: 20,
  },
  content: {
    fontFamily: "Raleway",
    fontWeight: "bold",
    fontSize: 18,
    color: "#888",
    textAlign: "left",
    paddingBottom: 20,
  },
  contentBox: {
    flex: 0.5,
    alignSelf: "flex-start",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  btn: { padding: 10, borderRadius: 5 },
  flexBox: {
    flex: 0.5,
    alignSelf: "flex-end",
    flexDirection: "row",
    display: "flex",
  },
}));

export { useStyles };
