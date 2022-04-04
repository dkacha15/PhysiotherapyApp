import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { Box, TextField, Button, Container, Typography, Grid, Paper, InputAdornment, IconButton, Dialog, DialogTitle } from "@material-ui/core";
import { useStyles } from "./ForgotPasswordStyles";
import * as Icons from '@material-ui/icons';
import PasswordStrengthBar from 'react-password-strength-bar';
import logo from "../assets/logo.jpeg";

const ResetPassword = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const { token } = useParams();
    const [openDialog1, setOpenDialog1] = React.useState(false);
    const [values, setValues] = React.useState({
        password: "",
        message: "",
        showPassword: false
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const forgotPasswordAPI = (event) => {
        event.preventDefault();
        fetch("http://localhost:5000/api/Physiotherapy/changePass", {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                token,
                password: values.password
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
    }

    const Dialog1 = (props) => {
        const { open } = props;
        const classes = useStyles();

        return (
            <Dialog open={open}>
                <DialogTitle>Password reset successfully.</DialogTitle>
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
                                    margin="normal"
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    id="password"
                                    value={values.password}
                                    onChange={handleChange("password")}
                                    type={values.showPassword ? 'text' : 'password'}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleClickShowPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <Icons.Visibility/> : <Icons.VisibilityOff/>}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                {values.password ? <PasswordStrengthBar password={values.password}/> : <Box></Box>}
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
                                        Reset
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

export default ResetPassword;