import React from "react";
import PropTypes from "prop-types";

import Box from "grommet/components/Box";
import Anchor from "grommet/components/Anchor";

import IconGithub from "grommet/components/icons/base/SocialGithub";

const SocialAnchor = props => {
  const label = props.small ? null : props.label;
  return (
    <Box colorIndex="neutral-1" pad="small">
      <Anchor href="" icon={props.icon} label={label} />
    </Box>
  );
};

class KdoSocial extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  //
  render() {
    const dir = this.props.small ? "row" : "column";
    return (
      <Box
        pad="small"
        align="center"
        direction={dir}
        justify="between"
        margin="small"
        responsive={false}
        wrap={true}
      >
        <SocialAnchor
          small={this.props.small}
          label="Github"
          icon={<IconGithub />}
        />
        <SocialAnchor
          small={this.props.small}
          label="Github"
          icon={<IconGithub />}
        />
        <SocialAnchor
          small={this.props.small}
          label="Github"
          icon={<IconGithub />}
        />
        <SocialAnchor
          small={this.props.small}
          label="Github"
          icon={<IconGithub />}
        />
      </Box>
    );
  }
}

KdoSocial.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default KdoSocial;
