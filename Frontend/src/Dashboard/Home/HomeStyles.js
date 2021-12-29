import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    carousel:{ width: "100%", flexGrow: 1 },
    image: {
        height: 500,
        display: "block",
        maxWidth: 1200,
        overflow: "hidden",
        width: "100%",
        padding: 120,
        paddingTop: 40,
        paddingBottom: 20,
      },
}));

export { useStyles };
