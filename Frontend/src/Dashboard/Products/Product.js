import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Link, Box, Button, Divider, Typography } from "@material-ui/core";
import { Products } from "./ProductList";
import { useStyles } from "./ProductStyles";
import * as Icons from "@material-ui/icons";

const Product = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const productIndex = Products.findIndex(
    (product) => product.name === props.product.name
  );
  const product = Products[productIndex];
  return (
    <Box className={classes.containerBox}>
      <Box className={classes.flex2}>
        <Box className={classes.imageBox2}>
          <Box
            component="img"
            src={props.product.image_url}
            className={classes.image}
            alt="our team"
          />
        </Box>
        <Box className={classes.contentBox2}>
          <Typography className={classes.title}>{product.name}</Typography>
          {product.para.map((item) => {
            return (
              <Box key={item} className={classes.infoBox}>
                <Typography className={classes.points}>{item}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box className={classes.flex1}>
        <Box className={classes.imageBox1}>
          <Typography className={classes.contact}>Contact Us</Typography>
          <Box className={classes.innerflex}>
            <Icons.Call className={classes.icon} />
            <Link href="tel:437-981-0060" className={classes.flex3content}>
              437-981-0060
            </Link>
          </Box>
          <Divider className={classes.divider} />
          <Box className={classes.innerflex}>
            <Icons.Mail className={classes.icon} />
            <Typography className={classes.flex3content}>
              brindahadvani0@gmail.com
            </Typography>
          </Box>
          <Divider className={classes.divider} />
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
          <Divider className={classes.divider} />
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
          <Divider className={classes.divider} />
          <Button
            variant="contained"
            className={classes.btn}
            onClick={() => navigate("/bookAppointment")}
          >
            <Typography className={classes.btnText}>
              Book Appointment
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Product;
