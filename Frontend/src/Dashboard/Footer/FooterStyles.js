import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  containerBox: {
    flex: 1,
    backgroundColor: "#212529",
    padding: 30,
    flexDirection: "row",
    display: "flex",
  },
  title: {
    fontFamily: "Raleway",
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  flex1content: {
    fontFamily: "Raleway",
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 20,
    paddingRight: 10,
  },
  flex1: {
    flex: 0.4,
    alignSelf: "flex-start",
  },
  flex2: {
    flex: 0.2,
    alignSelf: "flex-start",
  },
  middleflex: { flexDirection: "column", display: "flex", flex: 0.5 },
  link: {
    fontFamily: "Raleway",
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  innerflex2: { flexDirection: "column", display: "flex", flex: 0.5 },
  outerflex: {
    flex: 1,
    flexDirection: "row",
    display: "flex",
    marginTop: 20,
  },
  flex3: {
    flex: 0.4,
    alignSelf: "flex-start",
  },
  innerflex: {
    flex: 1,
    flexDirection: "row",
    display: "flex",
    marginTop: 10,
  },
  icon: { alignSelf: "center", color: "white" },
  flex3content: {
    color: "#ffffff",
    alignSelf: "center",
    marginLeft: 5,
    marginRight: 5,
  },
}));

export { useStyles };
