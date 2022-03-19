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

    confirmDialog: {
        padding:"10px",
    },

    date: {
        fontSize: "larger",
        fontWeight:700
    },

    time: {
        color:"gray",
    },

    cardContainer: {
        paddingLeft: "40px",
        paddingRight: "40px",
        marginTop: "10px",
        marginBottom: "10px",
    },

    cardItem: {
        paddingLeft:"10px",
        marginTop:"10px",
    },

    doctorImage: {
        height: 150,
        width: 150,
        marginTop: 10
    },

    serviceButton: {
        marginRight: 10,
        marginBottom: 10
    },
}));

export { useStyles };