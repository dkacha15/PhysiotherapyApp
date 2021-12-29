import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    component:{ backgroundColor: "#f7f6f6" },
  mainGrid:{ paddingBottom: 10 },
  container:{
    marginLeft: 60,
    marginRight: 60,
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 25,
    paddingBottom: 25,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    width: "25%",
  },
  link:{
    fontSize: 16,
    fontFamily: "Rubik",
    color: "#212529",
    fontWeight: "bold",
  },
}));

export { useStyles };
