import { Box } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AppLI from "./AppLI";
import AppBox from "./AppBox";
import AppBoldText from "./AppBoldText";

const StockDetails = () => {
  const { state: selectedStock } = useLocation();
  const navigate = useNavigate();

  return (
    <AppBox>
      <Box style={{ background: "lemonchiffon" }}>
        <AppBoldText>{selectedStock.stockDetails.name}</AppBoldText>
        <p
          style={{ color: selectedStock.stockDetails.color, fontWeight: "600" }}
        >
          {selectedStock.stockDetails.tag}
        </p>
      </Box>
      {selectedStock.stockDetails.criteria.map((criteria, key) => {
        const { type, text, variable } = criteria;

        return (() => {
          switch (type) {
            case "plain_text":
              return <AppLI key={key}>{text}</AppLI>;

            case "variable": {
              return (
                <AppLI key={key}>
                  {text.split(" ").map((ele, i) => {
                    return ele.includes("$") ? (
                      <span
                        style={{ color: "slateblue", cursor: "pointer" }}
                        onClick={() =>
                          navigate("/selectedStock/details", {
                            state: {
                              variable: variable[ele],
                            },
                          })
                        }
                      >{` ${ele.split("$")[1]}`}</span>
                    ) : (
                      ` ${ele}`
                    );
                  })}
                </AppLI>
              );
            }

            default:
              break;
          }
        })();
      })}
    </AppBox>
  );
};

export default StockDetails;
