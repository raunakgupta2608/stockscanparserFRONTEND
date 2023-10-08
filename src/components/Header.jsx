import { Box } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box
      data-testId="header"
      style={{
        border: "10px solid grey",
        textAlign: "center",
        margin: "auto",
        padding: "10px",
        fontSize: "50px",
        fontWeight: "bold",
      }}
    >
      Stock Scan Parser
    </Box>
  );
};

export default Header;
