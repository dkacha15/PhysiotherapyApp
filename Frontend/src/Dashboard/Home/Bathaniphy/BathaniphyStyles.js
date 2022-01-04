import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    flexDirection: "row-reverse",
    display: "flex",
    marginTop: "5%",
    marginBottom: "5%",
    paddingLeft: "5%",
    width: "100%",
    "@media (min-width:780px)": {
      width: "90%",
    },
    overflow: "hidden",
    flexWrap: "wrap",
  },
  title: {
    fontSize: 28,
    fontFamily: "Raleway",
    fontWeight: "bold",
    color: "#323232",
    textAlign: "left",
    paddingBottom: 25,
    paddingTop: 20,
    // paddingLeft: "2%",
    // marginLeft: "2%",
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
    flex: 0.9,
    alignSelf: "flex-start",
    justifyContent: "center",
    // paddingLeft: 15,
    // paddingRight: 15,
    // paddingLeft: "3%",
    // marginLeft: "2%",
    marginRight: "4%",
  },
  btn: { padding: 10, marginBottom: 10, borderRadius: 5 },
  flexBox: {
    flex: 0.1,
    alignSelf: "center",
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    marginRight: "10%",
  },
}));

export { useStyles };
