import * as React from "react";
import { Box } from "@material-ui/core";
import Header from "./Header/Header";
import Home from "./Home/Home";

const Dashboard = () => {
  const [products, setProducts] = React.useState([]);
  const [services, setServices] = React.useState([]);

  React.useEffect(() => {
    getAllProducts();
    getAllServices();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:5000/api/Physiotherapy/getProducts", {
      method: "Get",
    }).then((res) => res.json()).then((data) => {
      setProducts(data);
    })
  };

  const getAllServices = () => {
    fetch("http://localhost:5000/api/Physiotherapy/getServices", {
      method: "Get",
    }).then((res) => res.json()).then((data) => {
      setServices(data);
    })
  }

  return (
    <Box>
      <Header products={products} services={services}/>
      <Home products={products} services={services}/>
    </Box>
  );
};

export default Dashboard;
