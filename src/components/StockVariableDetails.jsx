import { Box } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import AppBox from "./AppBox";
import AppBoldText from "./AppBoldText";

const StockVariableDetails = () => {
  const { state: variableDetails } = useLocation();

  return (
    <AppBox>
      {(() => {
        switch (variableDetails.variable.type) {
          case "value":
            return (
              <ul>
                {variableDetails.variable.values.sort().map((value) => (
                  <li>{value}</li>
                ))}
              </ul>
            );

          case "indicator":
            return (
              <Box>
                <AppBoldText>
                  {variableDetails.variable.study_type.toUpperCase()}
                </AppBoldText>
                <p>Set Parameters</p>
                <Box
                  style={{
                    background: "lemonchiffon",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p>Period</p>
                  <input
                    type="text"
                    defaultValue={variableDetails.variable.default_value}
                  />
                </Box>
              </Box>
            );

          default:
            return null;
        }
      })()}
    </AppBox>
  );
};

export default StockVariableDetails;
