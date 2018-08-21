import React from "react";
import PropTypes from "prop-types";

import Box from "grommet/components/Box";
import Button from "grommet/components/Button";

import IconGithub from "grommet/components/icons/base/SocialGithub";
import IconMail from "grommet/components/icons/base/Mail";

// small stateless component that represent a social button. Props are icon, label and href
const SocialAnchor = props => {
  return <Box margin={ {bottom:'small'} } alignSelf="center"><Button icon={props.icon} label={props.label} href={props.href} {...props}/></Box>;
};

class KdoSocial extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  //
  render() {
    const dir = this.props.small ? "row" : "row";
    return (
      <Box
        pad="none"
        direction={dir}
        justify="around"
        margin="none"
        responsive={true}
        wrap={false}
      >
        <SocialAnchor
          label="/ dwltkvn"
          icon={<IconGithub />}
          href="https://github.com/dwltkvn"
        />
        
        <SocialAnchor
          label="/ contact"
          icon={<IconMail />}
          primary={true}
          onClick={ () => this.props.propOnContactClick() }
        />
        
      </Box>
    );
  }
}

KdoSocial.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default KdoSocial;
