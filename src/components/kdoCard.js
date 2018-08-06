import React from "react";
import PropTypes from "prop-types";

import Box from "grommet/components/Anchor";
import Card from "grommet/components/Card";
import Section from "grommet/components/Box";
import Anchor from "grommet/components/Anchor";

import Pulse from "grommet/components/icons/Pulse";
import IconPdf from "grommet/components/icons/base/Download";
import IconDown from "grommet/components/icons/base/Down";

import KdoSocial from "./kdoSocial";

class KdoCard extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }
  //icon={<Pulse size="xsmall" icon={<IconPdf size="xsmall" />} />}
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
        <Card
          thumbnail="https://avatars2.githubusercontent.com/u/7428297?s=460&v=4"
          label="Dowlut Kevin"
          heading="Software Developer"
          link={
            <Anchor
              href=""
              icon={<IconPdf colorIndex="neutral-1" />}
              label="Download CV"
            />
          }
          colorIndex="light-2"
        />
        <KdoSocial small={this.props.small} />
        {this.props.small ? (
          <Box alignSelf="center" align="center">
            <IconDown />
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
