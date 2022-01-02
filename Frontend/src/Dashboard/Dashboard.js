import React from "react";
import { Box } from "@material-ui/core";
import Header from "./Header/Header";
import Home from "./Home/Home";
const Dashboard = () => {
  //get list of services and products
  return (
    <Box>
      <Header />
      {/* pass list of services in home */}
      <Home />
    </Box>
  );
};

export default Dashboard;
