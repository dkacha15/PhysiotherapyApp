import * as React from "react";
import { Box, Typography, Link } from "@material-ui/core";
import * as Icons from "@material-ui/icons";
import { useStyles } from "./FooterStyles";

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.containerBox}>
      <Box className={classes.flex1}>
        <Typography className={classes.title}>About Us</Typography>
        <Typography className={classes.flex1content}>
          Bathani Physiotherapy is a dynamic multidisciplinary clinic that
          focuses on “one on one” hands on treatment. Our goal is to determine
          the cause of your problem in order to help you recover from your
          injury and return you to your normal activities as fast as possible.
        </Typography>
      </Box>
      <Box className={classes.flex2}>
        <Typography className={classes.title}>Quick Links</Typography>
        <Box className={classes.outerflex}>
          <Box className={classes.innerflex2}>
            <Box className={classes.innerflex}>
              <Icons.ChevronRight className={classes.icon} />
              <Link href="#" underline="always" className={classes.link}>
                Home
              </Link>
            </Box>
            <Box className={classes.innerflex}>
              <Icons.ChevronRight className={classes.icon} />
              <Link href="#" underline="always" className={classes.link}>
                About Us
              </Link>
            </Box>
            <Box className={classes.innerflex}>
              <Icons.ChevronRight className={classes.icon} />
              <Link href="#" underline="always" className={classes.link}>
                Services
              </Link>
            </Box>
            <Box className={classes.innerflex}>
              <Icons.ChevronRight className={classes.icon} />
              <Link href="#" underline="always" className={classes.link}>
                Products
              </Link>
            </Box>
          </Box>
          <Box className={classes.middleflex}>
            <Box className={classes.innerflex}>
              <Icons.ChevronRight className={classes.icon} />
              <Link href="#" underline="always" className={classes.link}>
                Team
              </Link>
            </Box>
            <Box className={classes.innerflex}>
              <Icons.ChevronRight className={classes.icon} />
              <Link href="#" underline="always" className={classes.link}>
                FAQs
              </Link>
            </Box>
            <Box className={classes.innerflex}>
              <Icons.ChevronRight className={classes.icon} />
              <Link href="#" underline="always" className={classes.link}>
                Contact Us
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.flex3}>
        <Typography className={classes.title}>Contact Us</Typography>
        <Box className={classes.innerflex}>
          <Icons.LocationOn className={classes.icon} />
          <Typography className={classes.flex3content}>
            40 Memory Lane, Brampton - L7A0V9, Ontario
          </Typography>
        </Box>
        <Box className={classes.innerflex}>
          <Icons.Call className={classes.icon} />
          <Typography className={classes.flex3content}>437-981-0060</Typography>
        </Box>
        <Box className={classes.innerflex}>
          <Icons.Mail className={classes.icon} />
          <Typography className={classes.flex3content}>
            brindahadvani0@gmail.com
          </Typography>
        </Box>
        <Box className={classes.innerflex}>
          <Icons.DateRange className={classes.icon} />
          <Typography className={classes.flex3content}>
            Monday-Friday
          </Typography>
          <Icons.Schedule className={classes.icon} />
          <Typography className={classes.flex3content}>
            9:30 AM to 7:30 PM
          </Typography>
        </Box>
        <Box className={classes.innerflex}>
          <Icons.DateRange className={classes.icon} />
          <Typography className={classes.flex3content}>
            Saturday-Sunday
          </Typography>
          <Icons.Schedule className={classes.icon} />
          <Typography className={classes.flex3content}>
            9:30 AM to 2:30 PM
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
