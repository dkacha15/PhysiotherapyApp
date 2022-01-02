import * as React from "react";
import CustomComponent from "../../../Shared/CustomComponent/CustomComponent";

const Ourproducts = (props) => {

  return (
    <CustomComponent title="Our Products" items={props.products} />
  );
};
export default Ourproducts;
