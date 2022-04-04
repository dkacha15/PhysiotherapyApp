import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  containerBox: {
    flex: 1,
    backgroundColor: "#ffffff",
    flexDirection: "column",
    display: "flex",
    marginTop: 20,
    // margin:10
  },
  flex1: {
    flex: 0.5,
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    display: "flex",
    // margin: 20,
    paddingTop: 0,
    padding: 20,
  },
  btnText: { fontWeight: "bold", color: "#ffffff", fontSize: 18 },
  divider: { color: "#888888", margin: 10, marginLeft: 5 },
  imageBox1: {
    flex: 0.5,
    alignSelf: "flex-start",
    // textAlign: "center",
    marginRight: 40,
    marginBottom: 30,
    marginTop: 10,
    padding: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#0968e817",
  },
  contentBox1: {
    flex: 0.9,
    alignSelf: "flex-start",
    marginRight: 30,
  },
  title: {
    fontFamily: "Raleway",
    fontSize: 30,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 10,
  },
  contact: { color: "#666666", fontSize: 30, fontWeight: "bold" },
  content: {
    fontFamily: "Raleway",
    fontSize: 18,
    color: "#888888",
    marginBottom: 20,
  },
  image: {
    width: 320,
    height: 270,
    borderRadius: 10,
  },
  infoBox: {
    flex: 1,
    flexDirection: "row",
    display: "flex",
  },
  points: {
    alignSelf: "flex-end",
    fontFamily: "Raleway",
    fontSize: 18,
    color: "#888888",
  },
  icon: {
    alignSelf: "center",
    color: "#888888",
  },
  flex2: {
    flex: 0.5,
    flexDirection: "row",
    flexWrap: "wrap",
    display: "flex",
    padding: 30,
    backgroundColor: "#F7F6F6",
  },
  imageBox2: {
    flex: 0.1,
    alignSelf: "flex-start",
    marginBottom: 30,
    marginTop: 10,
  },
  contentBox2: {
    flex: 0.9,
    alignSelf: "flex-start",
    marginLeft: 30,
  },
  innerflex: {
    flex: 1,
    flexDirection: "row",
    display: "flex",
    marginTop: 10,
  },
  flex3content: {
    color: "#888888",
    alignSelf: "center",
    marginLeft: 5,
    // marginRight: 5,
  },
}));

export { useStyles };
