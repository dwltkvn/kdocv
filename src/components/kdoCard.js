import React from "react";
import PropTypes from "prop-types";

import Card from "grommet/components/Card";
import Box from "grommet/components/Box";
import Anchor from "grommet/components/Anchor";

import IconPdf from "grommet/components/icons/base/DocumentPdf";

import KdoSocial from "./kdoSocial";

class KdoCard extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Box direction="column" pad={{ between: "medium" }} margin="small">
        <Card
          thumbnail="https://avatars2.githubusercontent.com/u/7428297?s=460&v=4"
          label="Dowlut Kevin"
          heading="Software Developer"
          description="Sample description providing more details."
          link={<Anchor href="" icon={<IconPdf />} label="Download CV" />}
          colorIndex="light-2"
        />
        <KdoSocial small={false} />
      </Box>
    );
  }
}

KdoCard.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default KdoCard;
