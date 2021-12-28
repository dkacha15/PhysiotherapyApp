import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    textFieldBox: {
        display: "flex",
        alignItems: "flex-end",
        marginBottom: 1
    },

    textFieldIcon: {
        marginRight: 2,
        marginTop: 0.5,
        marginBottom: 0.5
    },

    button: {
        marginTop:10
    }
}));

export { useStyles };