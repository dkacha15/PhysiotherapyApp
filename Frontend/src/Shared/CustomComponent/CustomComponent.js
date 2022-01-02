import * as React from "react";
import { Box, Link, Typography, Grid } from "@material-ui/core";
import { useStyles } from "./CustomComponentStyles";
import * as Icons from "@material-ui/icons";

const CustomComponent = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.containerBox} sx={{ width: "100%", flex: 1 }}>
      <Typography component="h2" className={classes.title}>
        {props.title}
      </Typography>
      <Grid container alignContent="center" className={classes.mainGrid}>
        {props.items.map((item) => {
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
                  src={item.photo}
                  alt="service"
                />
              </Grid>
              <Grid item>
                <Typography className={classes.name}>{item.name}</Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.information}>
                  {item.information}
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
export default CustomComponent;
