import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  containerBox: {
    flex: 1,
    backgroundColor: "#ffffff",
    flexDirection: "column",
    display: "flex",
  },
  flex1: {
    flex: 0.5,
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    display: "flex",
    margin: 20,
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
  flex2: {
    flex: 0.5,
    flexDirection: "row",
    flexWrap: "wrap",
    display: "flex",
    padding: 20,
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
