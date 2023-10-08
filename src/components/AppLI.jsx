import React from "react";

const AppLI = ({ key, children }) => {
  return (
    <li
      key={key}
      style={{
        fontSize: "20px",
        borderBottom: "1px solid black",
        paddingBottom: "5px",
        width: "fit-content",
      }}
    >
      {children}
    </li>
  );
};

export default AppLI;
