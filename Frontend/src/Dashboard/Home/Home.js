import * as React from "react";
import { Box } from "@material-ui/core";

import Carousel from "../Home/Carousel/Carousel";
import Bathaniphy from "./Bathaniphy/Bathaniphy";
import Scheduleappointment from "./Scheduleappointment/Scheduleappointment";
import CustomComponent from "../../Shared/CustomComponent/CustomComponent";

const Home = (props) => {
  return (
    <Box>
      <Carousel />
      <CustomComponent title="What We Do" items={props.services} />
      <Bathaniphy />
      <CustomComponent title="Our Products" items={props.products} />
      <Scheduleappointment />
    </Box>
  );
};

export default Home;
