import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import { Box, TextField, Button } from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import {useStyles} from './SignUpStyles';

const SignUp = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [mobile, setMobile] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [dob, setDob] = React.useState("");
    const [message, setMessage] = React.useState("");

    const signUpAPI = () => {
        fetch("http://localhost:5000/api/Physiotherapy/patientSignup", {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                name,
                mobile,
                email: email.toLocaleLowerCase(),
                password,
                address,
                dob
            })
        }).then((res) => res.json()).then((data) => {
            if (data.error) {
                setMessage(data.error);
            } else {
                navigate('/');
            }
        })
    }

    return (
        <Box>
            <Box className={classes.textFieldBox}>
                <Icons.AccountCircle className={classes.textFieldIcon} />
                <TextField id="name" label="Name" variant="standard" value={name} onChange={(e)=>setName(e.target.value)} />
            </Box>
            <Box className={classes.textFieldBox}>
                <Icons.Email className={classes.textFieldIcon} />
                <TextField id="email" label="Email" variant="standard" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </Box>
            <Box className={classes.textFieldBox}>
                <Icons.LocalPhoneRounded className={classes.textFieldIcon} />
                <TextField id="mobile" label="Mobile Number" variant="standard" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
            </Box>
            <Box className={classes.textFieldBox}>
                <Icons.Lock className={classes.textFieldIcon} />
                <TextField type="password" id="password" label="Password" variant="standard" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </Box>
            <Box className={classes.textFieldBox}>
                <Icons.Home className={classes.textFieldIcon} />
                <TextField id="address" label="Address" variant="standard" multiline value={address} onChange={(e)=>setAddress(e.target.value)}/>
            </Box>
            <Box className={classes.textFieldBox}>
                <Icons.DateRange className={classes.textFieldIcon} />
                <TextField type="date" id="dob" value={dob} onChange={(e)=>setDob(e.target.value)}/>
            </Box>
            <h3>
                {message}
            </h3>
            <Button className={classes.button} variant="contained" onClick={()=>signUpAPI()}>Register</Button>
        </Box>
    )
};

export default SignUp;