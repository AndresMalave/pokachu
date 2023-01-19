import { Box, LinearProgress, Typography } from "@mui/material";
import React from "react";

export const HpBar = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 3,
          width: "100%",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <LinearProgress
            variant="determinate"
            color={props.color}
            value={props.value}
            sx={{ height: "15px" }}
          />
        </Box>

        <Box sx={{ position: "absolute" }}>
          <Typography sx={{ fontWeight: "bold" }}>
            {props.hp} {props.shield > 1 && `+ (${props.shield})`}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
