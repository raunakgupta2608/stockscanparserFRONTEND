import { Box } from "@mui/material";
import React from "react";

const AppBox = ({ children, dataTestid }) => {
  return (
    <Box
      style={{
        margin: "20px auto",
        width: "50%",
        border: "3px solid green",
        padding: "10px",
      }}
      data-testId={dataTestid}
    >
      {children}
    </Box>
  );
};

export default AppBox;
