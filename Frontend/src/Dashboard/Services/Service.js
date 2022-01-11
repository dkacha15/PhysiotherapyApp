import * as React from "react";
import { Box, Typography } from "@material-ui/core";
import image from "../../assets/phy.png";
import { useStyles } from "./ServiceStyles";

const Service = (props) => {
  const service = props.service;
  const classes = useStyles();

  return (
    <Box className={classes.containerBox}>
      <Box className={classes.flex1}>
        <Box className={classes.imageBox1}>
          <Box component="img" src={image} alt="our team" />
        </Box>
        <Box className={classes.contentBox1}>
          <Typography className={classes.title}>Our Services</Typography>
          <Typography className={classes.content}>
            At Northview Physiotherapy Clinic, physiotherapy is directed at
            treating physical conditions causing pain and discomfort or
            limitations to mobility and lifestyle. The goal of the
            physiotherapist at Northview Physiotherpay is to relieve pain and
            help individuals resume their normal daily activities. Patient care
            at Northview Physiotherapy is based on orthopedic manual physical
            therapy, the art and science of utilizing highly skilled, specific
            hands-on techniques to diagnose and treat musculoskeletal injuries.
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
      <Box className={classes.flex2}>
        <Box className={classes.imageBox2}>
          <Box component="img" src={image} alt="our team" />
        </Box>
        <Box className={classes.contentBox2}>
          <Typography className={classes.title}>{service.name}</Typography>
          <Typography className={classes.content}>
            Our physiotherapists use targeted therapeutic exercise programs,
            manual therapy techniques, education as well as other techniques
            providing a fast and effective rehabilitation approach for many
            common conditions including: Back and Neck Pain, Headaches, Spine and
            Joint Conditions, Sports and Activity Related Injuries, Post Surgical
            Rehabilitation, Sprains, Strains and Tendinopathy
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Service;
