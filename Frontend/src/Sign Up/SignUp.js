import * as React from 'react';
import { Box, TextField, Button } from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import {useStyles} from './SignUpStyles';

const SignUp = () => {
    const classes = useStyles();

    return (
        <Box>
            <Box className={classes.textFieldBox}>
                <Icons.AccountCircle className={classes.textFieldIcon} />
                <TextField id="name" label="Name" variant="standard" />
            </Box>
            <Box className={classes.textFieldBox}>
                <Icons.Email className={classes.textFieldIcon} />
                <TextField id="email" label="Email" variant="standard" />
            </Box>
            <Box className={classes.textFieldBox}>
                <Icons.LocalPhoneRounded className={classes.textFieldIcon} />
                <TextField id="mobileNumber" label="Mobile Number" variant="standard" />
            </Box>
            <Box className={classes.textFieldBox}>
                <Icons.Lock className={classes.textFieldIcon} />
                <TextField type="password" id="password" label="Password" variant="standard" />
            </Box>
            <Box className={classes.textFieldBox}>
                <Icons.Home className={classes.textFieldIcon} />
                <TextField id="address" label="Address" variant="standard" multiline />
            </Box>
            <Box className={classes.textFieldBox}>
                <Icons.DateRange className={classes.textFieldIcon} />
                <TextField type="date" id="date" />
            </Box>
            <Button className={classes.button} variant="contained">Register</Button>
        </Box>
    )
};

export default SignUp;