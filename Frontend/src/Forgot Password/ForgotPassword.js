import * as React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { Box, TextField, Button, Container, Typography, Grid, Paper, Dialog, DialogTitle } from "@material-ui/core";
import { useStyles } from "./ForgotPasswordStyles";
import logo from "../assets/logo.jpeg";

const ForgotPassword = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [openDialog1, setOpenDialog1] = React.useState(false);
    const [values, setValues] = React.useState({
        email: "",
        message:""
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const forgotPasswordAPI = (event) => {
        event.preventDefault();
        fetch("http://localhost:5000/api/Physiotherapy/forgotPassword", {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                email: values.email,
            })
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    setValues({ ...values, message: data.error });
                } else {
                    setOpenDialog1(true);
                }
            });
    };

    const Dialog1 = (props) => {
        const { open } = props;
        const classes = useStyles();

        return (
            <Dialog open={open}>
                <DialogTitle>Check your email for instructions to reset your password.</DialogTitle>
                <Grid className={classes.confirmDialog} container justifyContent="center">
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        Okay
                    </Button>
                </Grid>
            </Dialog>
        )
    };

    Dialog1.propTypes = {
        open: PropTypes.bool.isRequired,
    };

    return (
        <Paper className={classes.background}>
            <Grid
                container
                spacing={0}
                className={classes.formGrid}
            >
                <Grid item xs={3}>
                    <Container maxWidth="xs" className={classes.formContainer}>
                        <Box className={classes.logoBox}>
                            <Box>
                                <img
                                    className={classes.logoImage}
                                    alt="logo"
                                    src={logo}
                                />
                            </Box>
                            <Box component="form" onSubmit={forgotPasswordAPI} sx={{ mt: 1 }}>
                                <TextField
                                    required
                                    variant="outlined"
                                    id="emil"
                                    label="Email Address"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange('email')}
                                    autoFocus
                                />
                                <Typography className={classes.error}>
                                    {values.message}
                                </Typography>
                                <Box sx={{ mt: 2, mb: 2 }}>
                                    <Button
                                        color="primary"
                                        fullWidth
                                        variant="contained"
                                        type="submit"
                                    >
                                        submit
                                    </Button>
                                </Box>
                                {/* <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link variant="body2" onClick={()=>navigate("/login")} style={{cursor:"pointer"}}>
                                            Sign in
                                        </Link>
                                    </Grid>
                                </Grid> */}
                            </Box>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
            <Dialog1
                open={openDialog1}
            />
        </Paper>
    )
};

export default ForgotPassword;