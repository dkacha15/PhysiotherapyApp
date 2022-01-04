import * as React from "react";
import { Box, Typography, Link } from "@material-ui/core";
import image from "../../assets/phy.png";
import { useStyles } from "./AboutusStyles";

const Aboutus = () => {
  const classes = useStyles();
  return (
    <Box className={classes.containerBox}>
      <Box className={classes.flex1}>
        <Box className={classes.imageBox1}>
          <Box component="img" src={image} alt="our team" />
        </Box>
        <Box className={classes.contentBox1}>
          <Typography className={classes.title}>About Our Team</Typography>
          <Typography className={classes.content}>
            Bathani Physiotherapy is a physiotherapist-owned and operated
            facility. At Bathani Physiotherapy, we employ evidence based
            approach for management of physical conditions. As physiotherapist,
            our vision is not tunneled in on using technical and passive
            treatment methods, instead we emphasize on using client’s active
            role in their own recovery.
          </Typography>
          <Typography className={classes.content}>
            As owners, we decided that there needed to be a facility where the
            client is actively involved in his/her recovery. The more we know
            about our clients, the better we can treat them. Therefore, it is
            our clients and their goals, which are the foundation of our
            practice
          </Typography>
          <Typography className={classes.content}>
            Bathani Physiotherapy brings a modern and cutting edge facility
            that redefines the patient-therapist relationship. Our goal is not
            to simply rehabilitate your injuries (which we obviously do!), but
            to re-build you as a person, as an athlete, as a worker or any other
            goal that you are trying to reach.
          </Typography>
        </Box>
      </Box>
      <Box className={classes.flex2}>
        <Box className={classes.imageBox2}>
          <Box component="img" src={image} alt="our team" />
        </Box>
        <Box className={classes.contentBox2}>
          <Typography className={classes.title}>Our Mission</Typography>
          <Typography className={classes.content}>
            At Bathani Physiotherapy, we focus on treating physical conditions
            causing pain and discomfort or limitations to mobility and
            lifestyle. Our primary goal of the physiotherapist is to relieve
            pain and help individuals resume their normal daily activities.
          </Typography>
          <Typography className={classes.content}>
            Our Physiotherapists guide patients in performing detailed
            therapeutic exercises customized to meet their therapy goals. The
            focus of therapy remains on motor control, pattern of recruitment,
            and timing of recruitment in order to retrain movement that often
            results in pain and disability. Therapeutic exercises are designed
            to improve strength, stabilization, range of motion, balance, and
            elite level functional performance.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Aboutus;
