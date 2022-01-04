import * as React from "react";
import { useStyles } from "./BathaniphyStyles";
import { Box, Typography, Button } from "@material-ui/core";
import image from "../../../assets/phy.png";

const Bathaniphy = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.flexBox}>
        <Box component="img" src={image} alt="team photo" />
      </Box>
      <Box className={classes.contentBox}>
        <Typography className={classes.title}>
          Welcome to Bathani Physiotherapy
        </Typography>
        <Typography className={classes.content}>
          Bathani Physiotherapy is a dynamic multidisciplinary clinic that
          focuses on “one on one” hands on treatment. Our goal is to determine
          the cause of your problem in order to help you recover from your
          injury and return you to your normal activities as fast as possible.
        </Typography>
        <Typography className={classes.content}>
          Patient care at Bathani Physiotherapy is based on orthopedic manual
          physical therapy, the art and science of utilizing highly skilled,
          specific hands-on techniques to diagnose and treat musculoskeletal
          injuries.
        </Typography>
        <Typography className={classes.content}>
          Experiencing aches and pains? Make an appointment and rehabilitate,
          recover and rejuvenate at Bathani Physiotherapy. We are open seven
          days a week and are a wheelchair accessible facility.
        </Typography>
        <Button variant="contained" className={classes.btn}>
          Learn More
        </Button>
      </Box>
    </Box>
  );
};
export default Bathaniphy;
