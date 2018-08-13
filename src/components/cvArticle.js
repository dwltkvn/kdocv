import React from "react";
import PropTypes from "prop-types";

import Section from "grommet/components/Section";
import Headline from "grommet/components/Headline";
import Animate from "grommet/components/Animate";

class CvArticle extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  // {this.props.children}
  render() {
    const sep = this.props.small ? "none" : "none";
    const spacing = this.props.small ? "none" : "small";
    return (
      <Section
        separator={sep}
        margin={spacing}
        pad={spacing}
        full={this.props.small}
        colorIndex={this.props.colorIndex}
      >
        <Animate
          enter={{ animation: "fade", duration: 1000, delay: 0 }}
          keep={true}
          visible={this.props.small ? "scroll" : true}
        >
          <Headline size="small" margin="none">{this.props.title}</Headline>
        </Animate>
        <Animate
          enter={{ animation: "fade", duration: 3000, delay: 0 }}
          keep={true}
          visible={this.props.small ? "scroll" : true}
        >
        {this.props.children}
        </Animate>
      </Section>
    );
  }
}

CvArticle.defaultProps = {
  colorIndex: "light-1"
};

CvArticle.propTypes = {
  title: PropTypes.string.isRequired
};

export default CvArticle;
