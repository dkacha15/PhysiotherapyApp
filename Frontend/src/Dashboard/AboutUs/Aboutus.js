import * as React from "react";
import { Box, Typography, Link } from "@material-ui/core";

const Aboutus = () => {
  return (
    <Box
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
        flexDirection: "column",
        display: "flex",
        backgroundColor: "yellow",
      }}
    >
      <Box
        style={{ flex: 1, flexDirection: "row", display: "flex", margin: 20 }}
      >
        <Box
          style={{
            flex: 0.7,
            alignSelf: "flex-start",
            backgroundColor: "red",
          }}
        >
          <Typography
            style={{
              fontFamily: "Raleway",
              fontSize: 30,
              fontWeight: "bold",
              color: "#333333",
            }}
          >
            About Our Team
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Aboutus;
