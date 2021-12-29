import * as React from "react";
import { Box, Link, Grid, Typography } from "@material-ui/core";
import phy from "../../../assets/physiologo.png";
import massage from "../../../assets/massage.png";
import orthotic from "../../../assets/orthotics.png";
import chiro from "../../../assets/chiropractic.png";
import mva from "../../../assets/MVA.png";
import { useStyles } from "./WhatwedoStyles.js";

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
    <Box className={classes.component} sx={{ width: "100%", flex: 1 }}>
      <Typography
        component="h2"
        style={{
          fontSize: 30,
          fontFamily: "Raleway",
          fontWeight: "bold",
          color: "#323232",
          textAlign: "center",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
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
                <Typography
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "bold",
                    fontSize: 18,
                    color: "#323232",
                    textAlign: "center",
                    marginTop: 20,
                    marginBottom: 20,
                  }}
                >
                  {service.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "bold",
                    fontSize: 15,
                    color: "#888",
                    textAlign: "center",
                    marginBottom: 10,
                  }}
                >
                  {service.information}
                </Typography>
              </Grid>
              <Grid item>
                <Link href="#" underline="none" className={classes.link}>
                  Read More
                </Link>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
export default Whatwedo;
