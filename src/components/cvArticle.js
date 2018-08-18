import React from "react";
import PropTypes from "prop-types";

import Section from "grommet/components/Section";
import Headline from "grommet/components/Headline";
import Animate from "grommet/components/Animate";

class CvArticle extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    
    this.state =
    {
      hasAppeared : false,
    }
  }

  // {this.props.children}
  render() {
    const headerAnim = { animation: "fade", duration: 1000, delay: 0 };
    const contentAnim = { animation: "fade", duration: 1000, delay: 500 };
    
    return (
      <Section
        full={this.props.small}
        colorIndex={this.props.colorIndex}
      >
        <Animate
          enter={headerAnim}
          keep={true}
          visible={ (this.props.small & !this.state.hasAppeared) ? "scroll" : true}
        >
          <Headline size="small" margin="small">{this.props.title}</Headline>
        </Animate>
        <Animate
          enter={contentAnim}
          keep={true}
          visible={ (this.props.small & !this.state.hasAppeared) ? "scroll" : true}
          onAppear={ () => { this.setState({hasAppeared:true}) } }
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
