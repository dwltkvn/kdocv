import React from "react";
import PropTypes from "prop-types";

import Card from "grommet/components/Card";
import Section from "grommet/components/Box";
import Anchor from "grommet/components/Anchor";

import Pulse from "grommet/components/icons/Pulse";
import IconPdf from "grommet/components/icons/base/Download";

import KdoSocial from "./kdoSocial";

class KdoCard extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }
  //icon={<Pulse size="xsmall" icon={<IconPdf size="xsmall" />} />}
  render() {
    const marg = this.props.small ? null : "small";
    return (
      <Section direction="column" pad={{ between: "medium" }} margin={marg}>
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
      </Section>
    );
  }
}

KdoCard.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default KdoCard;
