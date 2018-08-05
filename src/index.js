import React from "react";
import ReactDOM from "react-dom";
import Split from "grommet/components/Split";
import Box from "grommet/components/Box";

import KdoCard from "./components/kdoCard";
import CvArticle from "./components/cvArticle";

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
      <Box>
        <KdoCard />
      </Box>
      <Box>
        <CvArticle title="Hello!" />
        <CvArticle title="Experiences" />
        <CvArticle title="Education" />
        <CvArticle title="This is what I do" />
        <CvArticle title="I like" />
        <CvArticle title="Contact" />
      </Box>
    </Split>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
