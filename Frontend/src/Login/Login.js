import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Container, Typography, Grid, Link, Paper, InputAdornment, IconButton } from "@material-ui/core";
import * as Icons from "@material-ui/icons";
import { useStyles } from "./LoginStyles";
import logo from "../assets/logo.jpeg";

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    message: "",
    showPassword: false
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const loginAPI = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/api/Physiotherapy/patientLogin", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setValues({ ...values, message: data.error });
        } else {
          navigate("/", { state: { name: "Home" } });
          window.location.reload();
        }
      });
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
              {/* <Typography variant="h6" align="center">
                Sign In
              </Typography> */}
            </Box>
            <Box component="form" onSubmit={loginAPI} sx={{ mt: 1 }}>
                <TextField
                  required
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={values.email}
                  onChange={handleChange('email')}
                  autoFocus
                />
                <TextField
                  required
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type={values.showPassword ? 'text' : 'password'}
                  id="password"
                  value={values.password}
                  onChange={handleChange('password')}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {values.showPassword ? <Icons.VisibilityOff/> : <Icons.Visibility/>}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <Typography className={classes.error}>
                  {values.message}
                </Typography>
              <Box sx={{mt:2,mb:2}}>
                <Button
                    color="primary"
                    fullWidth
                    variant="contained"
                    type="submit"
                >
                  Sign In
                </Button>
              </Box>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link onClick={()=>navigate("/signup")} variant="body2" style={{cursor:"pointer"}}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Grid> 
    </Grid>
  </Paper>

    // <Box>
    //   <Box className={classes.textFieldBox}>
    //     <Icons.Email className={classes.textFieldIcon} />
    //     <TextField
    //       id="email"
    //       label="Email"
    //       variant="standard"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //   </Box>
    //   <Box className={classes.textFieldBox}>
    //     <Icons.Lock className={classes.textFieldIcon} />
    //     <TextField
    //       type="password"
    //       id="password"
    //       label="Password"
    //       variant="standard"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //   </Box>
    //   <h3>{message}</h3>
    //   <Button
    //     className={classes.button}
    //     variant="contained"
    //     onClick={() => loginAPI()}
    //   >
    //     Login
    //   </Button>
    // </Box>
  );
};

export default Login;
