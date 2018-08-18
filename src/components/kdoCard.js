import React from "react";
import PropTypes from "prop-types";

import Img from "gatsby-image";

import Box from "grommet/components/Anchor";
import Card from "grommet/components/Card";
import Section from "grommet/components/Box";
import Anchor from "grommet/components/Anchor";

import Hero from "grommet/components/Hero";

import IconPdf from "grommet/components/icons/base/Download";
import IconDown from "grommet/components/icons/base/Down";

import KdoSocial from "./kdoSocial";
import KdoSkillsTyping from "./kdoSkillsTyping";

class KdoCard extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    const marg = this.props.small ? "none" : "small";
      
    return (
      <Section
        direction="column"
        pad={{ between: "medium" }}
        margin={marg}
        full={this.props.small}
        justify="between"
      >
      <div>
        <Hero background={<Img title="Dowlut Kevin" alt="Welcome !" sizes={this.props.propImg.sizes} style={{}} />}/>
        <Card
          label="Dowlut Kevin"
          heading="Software Developer"
          description={<KdoSkillsTyping />}
          link={
            <Anchor
              href="https://www.dropbox.com/s/bo2x8vyhyceqaly/CV_DOWLUT_Kevin.pdf?dl=0"
              icon={<IconPdf colorIndex="neutral-1" />}
              label="Download CV"
            />
          }
          colorIndex="light-2"
        />
      </div>
        <KdoSocial small={this.props.small} />
        {this.props.small ? (
          <Box align="center">
            <IconDown id="actions" />
          </Box>
        ) : null}
      </Section>
    );
  }
}

KdoCard.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default KdoCard;
