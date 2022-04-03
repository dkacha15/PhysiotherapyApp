import * as React from "react";
import { useState } from "react";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import { useStyles } from "./ContactusStyles";

const Contactus = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.contactBox}>
        <Box className={classes.outerbox}>
          <Typography className={classes.heading}>Phone Number</Typography>
          <Typography className={classes.info}>437-981-0060</Typography>
        </Box>
        <Box className={classes.outerbox}>
          <Typography className={classes.heading}>Mail</Typography>
          <Typography className={classes.info}>
            brindahadvani0@gmail.com
          </Typography>
        </Box>
        <Box className={classes.outerbox}>
          <Typography className={classes.heading}>Address</Typography>
          <Typography className={classes.info}>
            40 Memory Lane, Brampton - L7A0V9, Ontario
          </Typography>
        </Box>
      </Box>
      <Box className={classes.formContainer}>
        <Box className={classes.emptyFlex}></Box>
        <Box className={classes.formFlex}>
          <Box className={classes.contentBox}>
            <Box
              className={classes.textBox}
              sx={{
                "& > :not(style)": { m: 1, width: "35ch" },
              }}
            >
              <TextField
                id="name"
                label="Name"
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box
              className={classes.textBox}
              sx={{
                "& > :not(style)": { m: 1, width: "35ch" },
              }}
            >
              <TextField
                id="email"
                label="Email"
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box
              className={classes.textBox}
              sx={{
                "& > :not(style)": { m: 1, width: "35ch" },
              }}
            >
              <TextField
                id="mobile"
                label="Mobile No."
                variant="standard"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </Box>
            <Box
              className={classes.textBox}
              sx={{
                "& > :not(style)": { m: 1, width: "35ch" },
              }}
            >
              <TextField
                id="message"
                label="Your Message"
                multiline
                rows={4}
                variant="standard"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Box>
            <Box className={classes.submit}>
              <Button variant="contained" className={classes.btn}>
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contactus;
