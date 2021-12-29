import * as React from "react";
import { Box } from "@material-ui/core";

import Carousel from "../Home/Carousel/Carousel";
import Whatwedo from "../Home/Whatwedo/Whatwedo";

const Home = () => {
  return (
    <Box>
      <Carousel />
      {/* pass list of services in Whatwedo */}
      <Whatwedo />
    </Box>
  );
};

export default Home;
