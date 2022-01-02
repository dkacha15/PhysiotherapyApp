import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  containerBox: {
    backgroundColor: "#f7f6f6",
    paddingTop: 30,
    paddingBottom: 30,
  },
  title: {
    fontSize: 30,
    fontFamily: "Raleway",
    fontWeight: "bold",
    color: "#323232",
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  mainGrid: { paddingBottom: 10 },
  container: {
    marginLeft: 60,
    marginRight: 60,
    marginTop: 15,
    marginBottom: 15,
    paddingBottom: 25,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    width: "25%",
  },
  image: {
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  name: {
    fontFamily: "Raleway",
    fontWeight: "bold",
    fontSize: 18,
    color: "#323232",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    paddingRight: 30,
    paddingLeft: 30,
  },
  information: {
    fontFamily: "Raleway",
    fontWeight: "bold",
    fontSize: 15,
    color: "#888",
    textAlign: "center",
    marginBottom: 10,
    paddingRight: 30,
    paddingLeft: 30,
  },
  link: {
    fontSize: 16,
    fontFamily: "Rubik",
    color: "#212529",
    fontWeight: "bold",
    alignSelf: "center",
  },
  innerflex: {
    flex: 1,
    flexDirection: "row",
    display: "flex",
    marginTop: 10,
  },
  icon: { alignSelf: "center" },
}));

export { useStyles };
