import * as React from "react";
import { Box, Typography } from "@material-ui/core";
import * as Icons from "@material-ui/icons";
import image from "../../assets/phy.png";
import { useStyles } from "./ServiceStyles";
import { Services } from "./ServiceList";

const Service = (props) => {
  const selectedService = props.service;

  const classes = useStyles();
  const serviceIndex = Services.findIndex(
    (service) => service.name === selectedService.name
  );
  const service = Services[serviceIndex];
  return (
    <Box className={classes.containerBox}>
      <Box className={classes.flex1}>
        <Box className={classes.imageBox1}>
          <Box component="img" src={image} alt="our team" />
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
              <Box className={classes.infoBox}>
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
