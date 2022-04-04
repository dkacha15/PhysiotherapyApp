import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Divider, Link, Button } from "@material-ui/core";
import * as Icons from "@material-ui/icons";
import { useStyles } from "./ServiceStyles";
import { Services } from "./ServiceList";

const Service = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const serviceIndex = Services.findIndex(
    (service) => service.name === props.service.name
  );
  const service = Services[serviceIndex];
  return (
    <Box className={classes.containerBox}>
      <Box className={classes.flex1}>
        <Box className={classes.imageBox1}>
          <Typography className={classes.contact}>Contact Us</Typography>
          <Box className={classes.innerflex}>
            <Icons.Call className={classes.icon} />
            <Link href="tel:437-981-0060" className={classes.flex3content}>
              437-981-0060
            </Link>
          </Box>
          <Divider className={classes.divider} />
          <Box className={classes.innerflex}>
            <Icons.Mail className={classes.icon} />
            <Typography className={classes.flex3content}>
              brindahadvani0@gmail.com
            </Typography>
          </Box>
          <Divider className={classes.divider} />
          <Box className={classes.innerflex}>
            <Icons.DateRange className={classes.icon} />
            <Typography className={classes.flex3content}>
              Monday-Friday
            </Typography>
            <Icons.Schedule className={classes.icon} />
            <Typography className={classes.flex3content}>
              9:30 AM to 7:30 PM
            </Typography>
          </Box>
          <Divider className={classes.divider} />
          <Box className={classes.innerflex}>
            <Icons.DateRange className={classes.icon} />
            <Typography className={classes.flex3content}>
              Saturday-Sunday
            </Typography>
            <Icons.Schedule className={classes.icon} />
            <Typography className={classes.flex3content}>
              9:30 AM to 2:30 PM
            </Typography>
          </Box>
          <Divider className={classes.divider} />
          <Button
            variant="contained"
            style={{
              margin: "4%",
              marginTop: 20,
              backgroundColor: "#0968e8",
              width: "90%",
            }}
            onClick={() => navigate("/bookAppointment")}
          >
            <Typography className={classes.btnText}>
              Book Appointment
            </Typography>
          </Button>
        </Box>
        <Box className={classes.contentBox1}>
          <Typography className={classes.title}>Our Services</Typography>
          <Typography className={classes.content}>
            {service.Card1.para1}
          </Typography>
          <Typography className={classes.content}>
            {service.Card1.para2}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.flex2}>
        <Box className={classes.imageBox2}>
          <Box
            component="img"
            src={service.Card2.img1}
            className={classes.image}
            alt="our team"
          />
        </Box>
        <Box className={classes.contentBox2}>
          <Typography className={classes.title}>{service.name}</Typography>
          <Typography className={classes.content}>
            {service.Card2.para1}
          </Typography>
          {service.Card2.para2.map((item) => {
            return (
              <Box key={item} className={classes.infoBox}>
                <Icons.ArrowForward className={classes.icon} />
                <Typography className={classes.points}>{item}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Service;
