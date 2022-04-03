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
}));

export { useStyles };
