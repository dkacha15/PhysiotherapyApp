import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: { padding: 30 },
  title: {
    fontSize: 25,
    fontFamily: "Raleway",
    fontWeight: "bold",
    color: "#323232",
    textAlign: "center",
    paddingBottom: 30,
  },
  btnBox: {
    textAlign: "center",
    margin: 20,
  },
  btn: { borderRadius: 5 },
}));
export { useStyles };
