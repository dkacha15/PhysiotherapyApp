import * as React from 'react';
import { Box, TextField, Button } from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import {useStyles} from './LoginStyles';

const Login = () => {
    const classes = useStyles();

    return (
        <Box>
            <Box className={classes.textFieldBox}>
                <Icons.Email className={classes.textFieldIcon} />
                <TextField id="email" label="Email" variant="standard" />
            </Box>
            <Box className={classes.textFieldBox}>
                <Icons.Lock className={classes.textFieldIcon} />
                <TextField type="password" id="password" label="Password" variant="standard" />
            </Box>
            <Button className={classes.button} variant="contained">Login</Button>
        </Box>
    )
};

export default Login;