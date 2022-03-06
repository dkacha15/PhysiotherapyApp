import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import { Box, TextField, Button, Paper, Container, Typography, Grid, Link, InputAdornment, IconButton } from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import { useStyles } from './SignUpStyles';
import logo from "../assets/logo.jpeg";

const SignUp = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [values, setValues] = React.useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
        dob: "",
        address: "",
        message: "",
        showPassword: false
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    }

    const signUpAPI = (event) => {
        event.preventDefault();
        fetch("http://localhost:5000/api/Physiotherapy/patientSignup", {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                name: values.name,
                mobile: values.mobile,
                email: values.email.toLocaleLowerCase(),
                password: values.password,
                address: values.address,
                dob: values.dob
            })
        }).then((res) => res.json()).then((data) => {
            if (data.error) {
                setValues({ ...values, message: data.error });
            } else {
                navigate("/", { state: { name: "Home" } });
                window.location.reload();
            }
        })
    }

    return (

        <Paper className={classes.background}>
            <Grid container spacing={0} className={classes.formGrid}>
                <Grid item xs={3}>
                    <Container maxWidth="xs" className={classes.formContainer}>
                        <Box className={classes.logoBox}>
                            <Box>
                                <img className={classes.logoImage}
                                    alt="logo"
                                    src={logo}
                                />
                                {/* <Typography variant="h6" align="center">
                                    Sign Up
                                </Typography> */}
                            </Box>
                        </Box>
                        <Box component="form" onSubmit={signUpAPI} sx={{ mt: 1 }}>
                            <TextField
                                required
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="name"
                                label="Full Name"
                                name="name"
                                autoFocus
                                value={values.name}
                                onChange={handleChange("name")}
                            />
                            <TextField
                                required
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                value={values.email}
                                onChange={handleChange("email")}
                            />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        name="mobile"
                                        id="mobile"
                                        label="Mobile Number"
                                        value={values.mobile}
                                        onChange={handleChange("mobile")}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        type="date"
                                        name="dob"
                                        id="dob"
                                        label="Birthdate"
                                        value={values.dob}
                                        onChange={handleChange("dob")}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                            </Grid>
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
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                name="address"
                                id="address"
                                label="Address"
                                value={values.address}
                                onChange={handleChange("address")}
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
                                    Sign Up
                                </Button>
                            </Box>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link variant="body2" onClick={()=>navigate("/login")} style={{cursor:"pointer"}}>
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </Paper>

        // <Box>
        //     <Box className={classes.textFieldBox}>
        //         <Icons.AccountCircle className={classes.textFieldIcon} />
        //         <TextField id="name" label="Name" variant="standard" value={name} onChange={(e)=>setName(e.target.value)} />
        //     </Box>
        //     <Box className={classes.textFieldBox}>
        //         <Icons.Email className={classes.textFieldIcon} />
        //         <TextField id="email" label="Email" variant="standard" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        //     </Box>
        //     <Box className={classes.textFieldBox}>
        //         <Icons.LocalPhoneRounded className={classes.textFieldIcon} />
        //         <TextField id="mobile" label="Mobile Number" variant="standard" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
        //     </Box>
        //     <Box className={classes.textFieldBox}>
        //         <Icons.Lock className={classes.textFieldIcon} />
        //         <TextField type="password" id="password" label="Password" variant="standard" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        //     </Box>
        //     <Box className={classes.textFieldBox}>
        //         <Icons.Home className={classes.textFieldIcon} />
        //         <TextField id="address" label="Address" variant="standard" multiline value={address} onChange={(e)=>setAddress(e.target.value)}/>
        //     </Box>
        //     <Box className={classes.textFieldBox}>
        //         <Icons.DateRange className={classes.textFieldIcon} />
        //         <TextField type="date" id="dob" value={dob} onChange={(e)=>setDob(e.target.value)}/>
        //     </Box>
        //     <h3>
        //         {message}
        //     </h3>
        //     <Button className={classes.button} variant="contained" onClick={()=>signUpAPI()}>Register</Button>
        // </Box>
    )
};

export default SignUp;