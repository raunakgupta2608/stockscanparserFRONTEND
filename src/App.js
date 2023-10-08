import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import StocksContainer from "./components/StocksContainer";
import StockDetails from "./components/StockDetails";
import StockVariableDetails from "./components/StockVariableDetails";

function App() {
  return (
    <Box component="div">
      <Header />
      <Routes>
        <Route path="/" element={<StocksContainer />} />
        <Route path="/selectedStock" exact element={<StockDetails />} />
        <Route
          path="/selectedStock/details"
          exact
          element={<StockVariableDetails />}
        />
      </Routes>
    </Box>
  );
}

export default App;
