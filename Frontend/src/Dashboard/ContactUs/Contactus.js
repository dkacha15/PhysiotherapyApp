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
        <Box
          style={{
            flex: 0.5,
            margin: 20,
            backgroundColor: "#3482FD",
            padding: 30,
            borderRadius: 15,
          }}
        >
          <Typography
            style={{
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
            }}
          >
            Phone Number
          </Typography>
          <Typography
            style={{
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            437-981-0060
          </Typography>
        </Box>
        <Box
          style={{
            flex: 0.5,
            margin: 20,
            backgroundColor: "#3482FD",
            padding: 30,
            borderRadius: 15,
          }}
        >
          <Typography
            style={{
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
            }}
          >
            Mail
          </Typography>
          <Typography
            style={{
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            brindahadvani0@gmail.com
          </Typography>
        </Box>
        <Box
          style={{
            flex: 0.5,
            margin: 20,
            backgroundColor: "#3482FD",
            padding: 30,
            borderRadius: 15,
          }}
        >
          <Typography
            style={{
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
            }}
          >
            Address
          </Typography>
          <Typography
            style={{
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            40 Memory Lane, Brampton - L7A0V9, Ontario
          </Typography>
        </Box>
      </Box>
      <Box
        style={{
          flex: 1,
          flexDirection: "row",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Box style={{ flex: 0.35 }}></Box>
        <Box
          style={{
            flex: 0.5,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Box
            style={{
              flex: 1,
              alignSelf: "center",
              margin: 20,
              alignContent: "center",
              flexDirection: "row",
              flexWrap: "flex",
            }}
          >
            <Box
              style={{
                flex: 0.5,
                marginBottom: 20,
              }}
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
              style={{
                flex: 0.5,
                marginBottom: 20,
              }}
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
              style={{
                flex: 0.5,
                marginBottom: 20,
              }}
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
              style={{
                flex: 0.5,
                marginBottom: 20,
              }}
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
            <Box
              style={{
                textAlign: "left",
                paddingTop: 20,
                paddingBottom: 20,
              }}
            >
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
