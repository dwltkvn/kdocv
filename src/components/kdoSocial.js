import React from "react";
import PropTypes from "prop-types";

import Box from "grommet/components/Box";
import Button from "grommet/components/Button";

import IconGithub from "grommet/components/icons/base/SocialGithub";

// small stateless component that represent a social button. Props are icon, label and href
const SocialAnchor = props => {
  return <Button icon={props.icon} label={props.label} href={props.href} />;
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
          label="/ dwltkvn"
          icon={<IconGithub />}
          href="https://github.com/dwltkvn"
        />
      </Box>
    );
  }
}

KdoSocial.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default KdoSocial;
