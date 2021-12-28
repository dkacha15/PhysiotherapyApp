import * as React from "react";
import Box from "@material-ui/core/Box";
import { Button, Typography } from "@material-ui/core";
import { useStyles } from "./HeaderStyles.js";
import logo from "../../assets/logo1.jpeg";

const pages = [
  { name: "Home", type: "button" },
  { name: "About Us", type: "button" },
  { name: "Services", type: "menu" },
  { name: "Products", type: "menu" },
  { name: "Team", type: "button" },
  { name: "FAQs", type: "button" },
  { name: "Contact Us", type: "button" },
  { name: "Book an Appointment", type: "button" },
];
const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.headerBox}>
      <Box className={classes.icon}>
        <img
          style={{
            width: 70,
            height: 70,
            marginLeft: 85,
          }}
          alt="logo"
          src={logo}
        />
        <Typography style={{ textAlign: "center" }}>
          Physiotherapy Center
        </Typography>
      </Box>
      <Box className={classes.links}>
        {pages.map((page) =>
          page.type === "button" ? (
            <Button className={classes.headerBtn}>
              <Typography variant="subtitle2" component="div">
                {page.name}
              </Typography>
            </Button>
          ) : (
            <Button className={classes.headerBtn}>
              <Typography variant="subtitle2" component="div">
                {page.name}
              </Typography>
            </Button>
          )
        )}
      </Box>
    </Box>
  );
};

export default Header;
