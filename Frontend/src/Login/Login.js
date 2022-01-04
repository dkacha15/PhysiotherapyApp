import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button } from "@material-ui/core";
import * as Icons from "@material-ui/icons";
import { useStyles } from "./LoginStyles";

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");

  const loginAPI = () => {
    fetch("http://localhost:5000/api/Physiotherapy/patientLogin", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setMessage(data.error);
        } else {
          navigate("/", {state: {  name: "Home"  }});
        }
      });
  };

  return (
    <Box>
      <Box className={classes.textFieldBox}>
        <Icons.Email className={classes.textFieldIcon} />
        <TextField
          id="email"
          label="Email"
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <Box className={classes.textFieldBox}>
        <Icons.Lock className={classes.textFieldIcon} />
        <TextField
          type="password"
          id="password"
          label="Password"
          variant="standard"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <h3>{message}</h3>
      <Button
        className={classes.button}
        variant="contained"
        onClick={() => loginAPI()}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
