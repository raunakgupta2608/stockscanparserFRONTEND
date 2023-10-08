import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import API from "../utils/axios";
import { useNavigate } from "react-router-dom";
import AppBox from "./AppBox";

const StocksContainer = () => {
  const navigate = useNavigate();
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    stockData?.length !== 0 && getStockData();
  }, []);

  async function getStockData() {
    try {
      const { data, status } = await API.get("/stocks");
      if (status === 200) setStockData(data);
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <AppBox dataTestid="stockContainer">
      {stockData?.map((stock, index) => {
        return (
          <Box
            key={index}
            style={{
              borderBottom:
                index === stockData.length - 1 ? "none" : "1px solid black",
            }}
          >
            <Box
              style={{ cursor: "pointer" }}
              onClick={() =>
                navigate("/selectedStock", {
                  state: { stockDetails: stock },
                })
              }
            >
              <p>{stock.name}</p>
              <p style={{ color: stock.color }}>{stock.tag}</p>
            </Box>
          </Box>
        );
      })}
    </AppBox>
  );
};

export default StocksContainer;
