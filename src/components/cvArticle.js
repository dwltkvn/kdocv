import React from "react";
import PropTypes from "prop-types";

import Section from "grommet/components/Section";
import Headline from "grommet/components/Headline";

class CvArticle extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  // {this.props.children}
  render() {
    const sep = this.props.small ? "none" : "all";
    const spacing = this.props.small ? "none" : "small";
    return (
      <Section
        separator={sep}
        margin={spacing}
        pad={spacing}
        full={this.props.small}
      >
        <Headline size="small">{this.props.title}</Headline>
        {this.props.children}
      </Section>
    );
  }
}

CvArticle.propTypes = {
  title: PropTypes.string.isRequired
};

export default CvArticle;
