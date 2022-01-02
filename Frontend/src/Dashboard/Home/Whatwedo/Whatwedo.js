import * as React from "react";
import CustomComponent from "../../../Shared/CustomComponent/CustomComponent";

const Whatwedo = (props) => {
  return <CustomComponent title="What We Do" items={props.services} />;
};
export default Whatwedo;
