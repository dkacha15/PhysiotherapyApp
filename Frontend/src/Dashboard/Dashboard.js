import * as React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@material-ui/core";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Aboutus from "./AboutUs/Aboutus";
import Service from "./Services/Service";
import Product from "./Products/Product";
import Contactus from "./ContactUs/Contactus";
const Dashboard = (props) => {
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [service, setService] = useState([]);
  const [product, setProduct] = useState([]);

  const { state } = useLocation();
  const [page, setPage] = useState(state ? state.name : "Home");

  useEffect(() => {
    getAllProducts();
    getAllServices();
  }, []);

  useEffect(() => {
    if (state) {
      if (state.type === "Products") {
        setPage("Products");
        setProduct(state.item);
      } else if (state.type === "Services") {
        setPage("Services");
        setService(state.item);
      } else {
        setPage(state.name);
      }
    }
  }, [state]);

  const getAllProducts = () => {
    fetch("http://localhost:5000/api/Physiotherapy/getProducts", {
      method: "Get",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  const getAllServices = () => {
    fetch("http://localhost:5000/api/Physiotherapy/getServices", {
      method: "Get",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  };

  return (
    <Box style={{ flex: 1, width: "100%" }}>
      <Header products={products} services={services} />
      {page === "Home" && <Home products={products} services={services} />}
      {page === "About Us" && <Aboutus />}
      {page === "Services" && <Service service={service} />}
      {page === "Products" && <Product product={product} />}
      {page === "Contact Us" && <Contactus />}
      <Footer />
    </Box>
  );
};

export default Dashboard;
