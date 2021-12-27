import React from "react";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import { useStyles } from "./HeaderStyles.js";

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.headerBox}>
      <Box className={classes.logo}>LOGO Here</Box>
      <Box className={classes.links}>
        <Button className={classes.homeBtn}>Home</Button>
        <Button className={classes.aboutUsBtn}>About Us</Button>
        <Button className={classes.servicesBtn}>Services</Button>
        <Button className={classes.productsBtn}>Products</Button>
      </Box>
    </Box>
  );
};

export default Header;
