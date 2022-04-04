import { makeStyles } from "@material-ui/core/styles";
import image from "../assets/physio.jpeg";

const useStyles = makeStyles((theme) => ({

    background: {
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition:"center"
    },

    formGrid: {
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight:"100vh"
    },

    formContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        paddingBottom: 20,
        paddingTop: 10
    },

    logoBox: {
        display: "flex",
        flexDirection: "column",
        alignItems:"center"
    },

    logoImage: {
        width: 230,
        borderRadius: 10
    },

    error: {
        color: "red",
        fontSize: 14,
        textAlign: "center",
        fontWeight:"bold"
    },

    // textFieldBox: {
    //     display: "flex",
    //     alignItems: "flex-end",
    //     marginBottom: 1
    // },

    // textFieldIcon: {
    //     marginRight: 2,
    //     marginTop: 0.5,
    //     marginBottom: 0.5
    // },

    // button: {
    //     marginTop:10
    // }
}));

export { useStyles };