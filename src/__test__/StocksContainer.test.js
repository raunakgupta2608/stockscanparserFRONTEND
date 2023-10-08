import { act, render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import StocksContainer from "../components/StocksContainer";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Testing Header", () => {
  test("Styling and content of header", () => {
    act(() => {
      render(
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<App />} />
          </Routes>
        </BrowserRouter>,
        container
      );
    });
    const linkElement = screen.getByText(/stock scan parser/i);
    expect(linkElement).toBeInTheDocument();

    const stockContainerBox = screen.getByTestId("header");
    expect(stockContainerBox).toHaveStyle("border : 10px solid grey");
    expect(stockContainerBox).toHaveStyle("text-align: center");
    expect(stockContainerBox).toHaveStyle("margin: auto");
    expect(stockContainerBox).toHaveStyle("padding: 10px");
    expect(stockContainerBox).toHaveStyle("font-size: 50px");
    expect(stockContainerBox).toHaveStyle("font-weight: bold");
  });
});

describe("Testing StocksContainer", () => {
  test("Rendering StockContainer", async () => {
    act(() => {
      render(
        <BrowserRouter>
          <Routes>
            <Route
              path="*"
              element={
                <App>
                  <StocksContainer />
                </App>
              }
            />
          </Routes>
        </BrowserRouter>,
        container
      );
    });

    const stockContainerBox = screen.getByTestId("stockContainer");
    expect(stockContainerBox).toBeInTheDocument();
  });
});
