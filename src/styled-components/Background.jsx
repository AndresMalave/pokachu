import { Box, styled } from "@mui/material";

import backgroundImg from "../assets/background.jpg";
import vsImg from "../assets/vs.jpg";

export const StyledContainer = styled(Box)(() => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: `url(${backgroundImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}));

export const StyledNotification = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: `url(${vsImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  color: "#fff",
  borderRadius: 5,
  padding: 4,
}));

export const StyledActionBar = styled(Box)(() => ({
  background: "rgba(0, 0, 0, .60)",
  width: "100%",
  height: "200px",
  position: "absolute",
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
}));
