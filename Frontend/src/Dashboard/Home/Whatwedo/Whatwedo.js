import * as React from "react";
import { Box, Link, Grid, Typography } from "@material-ui/core";
import * as Icons from "@material-ui/icons";
import { useStyles } from "./WhatwedoStyles.js";

import phy from "../../../assets/physiologo.png";
import massage from "../../../assets/massage.png";
import orthotic from "../../../assets/orthotics.png";
import chiro from "../../../assets/chiropractic.png";
import mva from "../../../assets/MVA.png";

//Get list of services from home
const services = [
  {
    name: "Physiotherapy",
    information:
      "Our physiotherapists use targeted therapeutic exercise programs, manual therapy techniques",
    link: phy,
  },
  {
    name: "Massage Therapy",
    information:
      "Massage therapy is an integral part of maintaining overall health.  Amidst the craziness of everyday life",
    link: massage,
  },
  {
    name: "MVA",
    information:
      "At Bathani Physiotherapy we offer rehabilitation treatments for a wide range of car accident injuries",
    link: mva,
  },
  {
    name: "Chiropractic Therapy",
    information:
      "Chiropractors are extensively educated in the prevention, assessment, diagnosis and management ",
    link: chiro,
  },
  {
    name: "Custom Orthotics",
    information:
      "Do you experience pain, discomfort, or generalized aches in your feet and legs when you walk",
    link: orthotic,
  },
];
const Whatwedo = () => {
  const classes = useStyles();

  return (
    <Box
      className={classes.component}
      sx={{ width: "100%", flex: 1, paddingTop: 30, paddingBottom: 30 }}
    >
      <Typography component="h2" className={classes.title}>
        What We Do
      </Typography>
      <Grid container alignContent="center" className={classes.mainGrid}>
        {services.map((service) => {
          return (
            <Grid
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              container
              justify="center"
              alignItems="center"
              direction="column"
              className={classes.container}
            >
              <Grid item>
                <Box
                  component="img"
                  style={{ width: 75 }}
                  src={service.link}
                  alt="service"
                />
              </Grid>
              <Grid item>
                <Typography className={classes.servname}>
                  {service.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.servinfo}>
                  {service.information}
                </Typography>
              </Grid>
              <Grid item>
                <Box className={classes.innerflex}>
                  <Link href="#" underline="none" className={classes.link}>
                    Read More
                  </Link>
                  <Icons.ChevronRight className={classes.icon} />
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
export default Whatwedo;
