import { Box, Typography } from "@mui/material";
import React from "react";

export const CardAttack = (props) => {
  return (
    <>
      <Box
        sx={{
          background: "#DCF100",
          height: "90%",
          width: "150px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            background: "#2FF100",
            height: "50px",
            width: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Foto
        </Box>
        <Box>
          <Typography variant="h6">{props.name}</Typography>
          <Typography variant="body2">⚔️ {props.damage} pts</Typography>
          <Typography variant="body2">🛡️ {props.shield} pts</Typography>
          <Typography variant="body2">❤️ {props.heal} pts</Typography>
        </Box>
      </Box>
    </>
  );
};
