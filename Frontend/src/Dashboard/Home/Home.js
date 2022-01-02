import * as React from "react";
import { Box } from "@material-ui/core";

import Carousel from "../Home/Carousel/Carousel";
import Whatwedo from "../Home/Whatwedo/Whatwedo";
import Bathaniphy from "./Bathaniphy/Bathaniphy";
import Ourproducts from "./Ourproducts/Ourproducts";
import Scheduleappointment from "./Scheduleappointment/Scheduleappointment";
import Footer from "./Footer/Footer";
const Home = () => {
  return (
    <Box>
      <Carousel />
      {/* pass list of services in Whatwedo */}
      <Whatwedo />
      <Bathaniphy />
      {/* pass list of products in Ourproducts */}
      <Ourproducts />
      <Scheduleappointment />
      <Footer />
    </Box>
  );
};

export default Home;
