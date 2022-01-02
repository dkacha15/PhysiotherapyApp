import * as React from "react";
import CustomComponent from "../../../Shared/CustomComponent/CustomComponent";
import phy from "../../../assets/physiologo.png";
import massage from "../../../assets/massage.png";
import orthotic from "../../../assets/orthotics.png";
import chiro from "../../../assets/chiropractic.png";
import mva from "../../../assets/MVA.png";

//Get list of services from home
const services = [
  {
    name: "Physiotherapy",
    information:
      "Our physiotherapists use targeted therapeutic exercise programs, manual therapy techniques",
    photo: phy,
  },
  {
    name: "Massage Therapy",
    information:
      "Massage therapy is an integral part of maintaining overall health.  Amidst the craziness of everyday life",
    photo: massage,
  },
  {
    name: "MVA",
    information:
      "At Bathani Physiotherapy we offer rehabilitation treatments for a wide range of car accident injuries",
    photo: mva,
  },
  {
    name: "Chiropractic Therapy",
    information:
      "Chiropractors are extensively educated in the prevention, assessment, diagnosis and management ",
    photo: chiro,
  },
  {
    name: "Custom Orthotics",
    information:
      "Do you experience pain, discomfort, or generalized aches in your feet and legs when you walk",
    photo: orthotic,
  },
];
const Whatwedo = () => {
  return <CustomComponent title="What We Do" items={services} />;
};
export default Whatwedo;
