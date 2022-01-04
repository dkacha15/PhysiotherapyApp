import * as React from "react";
import { Box } from "@material-ui/core";
import Header from "./Header/Header";
import Home from "./Home/Home";

import Footer from "./Footer/Footer";
import Aboutus from "./AboutUs/Aboutus";

const Dashboard = () => {
  const [products, setProducts] = React.useState([]);
  const [services, setServices] = React.useState([]);
  const [page, setPage] = React.useState("About Us");

  React.useEffect(() => {
    getAllProducts();
    getAllServices();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:5000/api/Physiotherapy/getProducts", {
      method: "Get",
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  const getAllServices = () => {
    fetch("http://localhost:5000/api/Physiotherapy/getServices", {
      method: "Get",
    })
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  };
  const handleSelected = (props) => {
    setPage(props);
  };

  return (
    <Box style={{ flex: 1, width: "100%" }}>
      <Header
        products={products}
        services={services}
        selected={handleSelected}
      />
      {page === "Home" && <Home products={products} services={services} />}
      {page === "About Us" && <Aboutus />}
      <Footer />
    </Box>
  );
};

export default Dashboard;
