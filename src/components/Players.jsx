import { Box } from "@mui/material";
import React from "react";

export const Players = (props) => {
  return (
    <>
      <Box
        sx={{
          background: `url(${props.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: `scaleX(${props.rotate})`,
          height: "200px",
          width: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.title}
      </Box>
    </>
  );
};
