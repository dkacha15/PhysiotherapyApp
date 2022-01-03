import * as React from "react";
import { Box, Button } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { MobileStepper } from "@material-ui/core";
import { useStyles } from "./CarouselStyles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import img1 from "../../../assets/img5.jpeg";
import img2 from "../../../assets/img2.webp";
import img4 from "../../../assets/img4.jpeg";
import img3 from "../../../assets/img1.png";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: img1,
  },
  {
    label: "Bird",
    imgPath: img2,
  },
  {
    label: "Bali, Indonesia",
    imgPath: img4,
  },
  {
    label: "Goč, Serbia",
    imgPath: img3,
  },
];
const Carousel = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep - 1 === -1 ? maxSteps - 1 : prevActiveStep - 1
    );
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        height: "20%",
      }}
    >
      <AutoPlaySwipeableViews
        axis="x"
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                style={{
                  "@media (min-width:780px)": {
                    width: "20%",
                    heigth: 50,
                  },
                  overflow: "hidden",
                  alignContent: "center",
                  alignItems: "center",
                  marginRight: "2%",
                  marginLeft: "2%",
                  marginTop: "3%",
                  paddingLeft: "7%",
                  paddingRight: "7%",
                }}
              >
                <Box
                  component="img"
                  className={classes.image}
                  src={step.imgPath}
                  alt={step.label}
                />
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        className={classes.stepper}
        sx={{ maxWidth: 400, flexGrow: 1 }}
        nextButton={
          <Button size="small" onClick={handleNext}>
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack}>
            <KeyboardArrowLeft />
          </Button>
        }
      />
    </Box>
  );
};
export default Carousel;
