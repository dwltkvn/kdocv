import React from "react";
import PropTypes from "prop-types";

import Box from "grommet/components/Box";
import Headline from "grommet/components/Headline";

class CvArticle extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  // {this.props.children}
  render() {
    return (
      <Box separator="all" margin="small" pad="medium">
        <Headline size="small">{this.props.title}</Headline>
        {this.props.children}
      </Box>
    );
  }
}

CvArticle.propTypes = {
  title: PropTypes.string.isRequired
};

export default CvArticle;
