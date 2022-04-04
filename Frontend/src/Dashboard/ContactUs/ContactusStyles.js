import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: { flex: 1, flexDirection: "column", display: "flex" },
  contactBox: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    display: "flex",
    flexWrap: "wrap",
  },
  btn: { borderRadius: 5, backgroundColor: "#0968e8", color: "#ffffff" },
  outerbox: {
    flex: 0.5,
    margin: 20,
    backgroundColor: "#3482FD",
    padding: 30,
    borderRadius: 15,
  },
  heading: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  info: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  formContainer:{
    flex: 1,
    flexDirection: "row",
    display: "flex",
    flexWrap: "wrap",
  },
  emptyFlex:{ flex: 0.35 },
  formFlex:{
    flex: 0.5,
    justifyContent: "center",
    alignSelf: "center",
  },
  contentBox:{
    flex: 1,
    alignSelf: "center",
    margin: 20,
    alignContent: "center",
    flexDirection: "row",
    flexWrap: "flex",
  },
  textBox:{
    flex: 0.5,
    marginBottom: 20,
  },
  submit:{
    textAlign: "left",
    paddingTop: 20,
    paddingBottom: 20,
  }
}));

export { useStyles };
