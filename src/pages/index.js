import React from "react";
import ReactDOM from "react-dom";
import Split from "grommet/components/Split";
import Box from "grommet/components/Box";

import Responsive from "grommet/utils/Responsive";

import KdoCard from "./components/kdoCard";
import CvArticle from "./components/cvArticle";
import KdoSocial from "./components/kdoSocial";

import "./styles.css";
import "../node_modules/grommet-css";

class App extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this._onResponsive = this._onResponsive.bind(this);
  }

  componentDidMount() {
    this._responsive = Responsive.start(this._onResponsive);
  }

  componentWillUnmount() {
    this._responsive.stop();
  }

  _onResponsive(small) {
    this.setState({ small });
  }

  render() {
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
          {this.state.small ? <KdoCard small={this.state.small} /> : null}
          <CvArticle
            title="Hello!"
            small={this.state.small}
            colorIndex="light-2"
          />
          <CvArticle title="Experiences" small={this.state.small} />
          <CvArticle
            title="Education"
            small={this.state.small}
            colorIndex="light-2"
          />
          <CvArticle
            title="This is what I do"
            small={this.state.small}
            colorIndex="light-1"
          />
          <CvArticle
            title="I like"
            small={this.state.small}
            colorIndex="light-2"
          />
          <CvArticle
            title="Contact"
            small={this.state.small}
            colorIndex="light-1"
          />
        </Box>
      </Split>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
