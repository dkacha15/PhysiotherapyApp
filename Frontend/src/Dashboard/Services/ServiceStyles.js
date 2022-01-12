import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  containerBox: {
    flex: 1,
    backgroundColor: "#ffffff",
    flexDirection: "column",
    display: "flex",
    marginTop: 20,
  },
  flex1: {
    flex: 0.5,
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    display: "flex",
    margin: 20,
    paddingTop: 0,
    padding: 20,
  },
  imageBox1: {
    flex: 0.1,
    alignSelf: "flex-end",
    marginBottom: 30,
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
    padding: 40,
    backgroundColor: "#F7F6F6",
  },
  imageBox2: {
    flex: 0.1,
    alignSelf: "flex-end",
    marginBottom: 30,
  },
  contentBox2: {
    flex: 0.9,
    alignSelf: "flex-start",
    marginLeft: 30,
  },
}));

export { useStyles };
