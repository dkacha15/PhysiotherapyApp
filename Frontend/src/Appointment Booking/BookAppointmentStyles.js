import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    box1: {
        display: "flex",
        minHeight: "100%",
        fontSize:"14px"
    },

    box2: {
        flexGrow: 1,
        padding:"3em"
    },

    date: {
        fontSize: "larger",
        fontWeight:700
    },

    time: {
        color:"gray",
    }
}));

export { useStyles };