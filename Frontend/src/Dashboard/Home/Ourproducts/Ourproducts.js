import * as React from "react";
import { Box, Link, Typography, Grid } from "@material-ui/core";
import { useStyles } from "./OurproductsStyle";
import ortho from "../../../assets/orthopro.jpeg";
import stocking from "../../../assets/compstocking.jpeg";
import braces from "../../../assets/braces.jpeg";
import taping from "../../../assets/taping.jpeg";
import equip from "../../../assets/equip.jpeg";

const products = [
  {
    name: "Orthotics",
    information:
      "Orthotics are health care products custom designed to provide support and correct abnormalities that occur in the body due to poor foot biomechanics.",
    photo: ortho,
  },
  {
    name: "Compression Stockings",
    information:
      "If you have heavy, fatigued legs or swollen feet and ankles at the end of a long day of sitting or standing don’t dismiss your discomfort or assume you have to live with it.",
    photo: stocking,
  },
  {
    name: "Braces",
    information:
      "Bracing is a therapy option that gives much needed support to joints that have become uneven or unstable due to an injury, illness or chronic condition.",
    photo: braces,
  },
  {
    name: "Taping",
    information:
      "Our Physiotherapists uses this technique to treat both athletes and non-athletes for sports injuries or conditions of the muscles and joints, for both.",
    photo: taping,
  },
  {
    name: "Home Exercise Equipment",
    information:
      "Bracing is a therapy option that gives much needed support to joints that have become uneven or unstable due to an injury, illness or chronic condition.",
    photo: equip,
  },
];
const Ourproducts = () => {
  const classes = useStyles();

  return (
    <Box className={classes.containerBox} sx={{ width: "100%", flex: 1 }}>
      <Typography component="h2" className={classes.title}>
        Our Products
      </Typography>
      <Grid container alignContent="center" className={classes.mainGrid}>
        {products.map((product) => {
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
                  className={classes.image}
                  src={product.photo}
                  alt="service"
                />
              </Grid>
              <Grid item>
                <Typography className={classes.name}>{product.name}</Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.information}>
                  {product.information}
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
export default Ourproducts;
