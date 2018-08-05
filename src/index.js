import React from "react";
import ReactDOM from "react-dom";
import Split from "grommet/components/Split";
import Box from "grommet/components/Box";

import "./styles.css";
import "../node_modules/grommet-css";

function App() {
  return (
    <Split
      separator={false}
      flex="right"
      fixed={true}
      priority="right"
      showOnResponsive="priority"
    >
      <Box colorIndex="neutral-1" justify="center" align="center" pad="medium">
        Left Side
      </Box>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </Split>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
