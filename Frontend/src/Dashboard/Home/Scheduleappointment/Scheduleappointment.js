import * as React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { useStyles } from "./ScheduleappointmentStyles";

const Scheduleappointment = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>Schedule A Consultation</Typography>
      <Box className={classes.btnBox}>
        <Button variant="contained" className={classes.btn}>
          Book A Appointment
        </Button>
      </Box>
    </Box>
  );
};
export default Scheduleappointment;
