import React from "react";
import PropTypes from "prop-types";
import Typing from "react-typing-animation";

import Box from "grommet/components/Box";
import Label from "grommet/components/Label";

import IconLike from "grommet/components/icons/base/Like";

const Skills = ["Qt ", "C++ ", "SQLite ", "Javascript ", "React "];
const Colors = [
  "brand",
  "accent-1",
  "accent-2",
  "neutral-1",
  "neutral-2",
  "neutral-3",
  "neutral-4"
];

class KdoSkillsTyping extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    this.state = {
      currentColor: 0
    };
    this.cbOnFinishedTyping = this.cbOnFinishedTyping.bind(this);
  }

  cbOnFinishedTyping() {
    const c = Math.floor(Math.random() * Math.floor(Colors.length));
    this.setState({ currentColor: c });
  }

  render() {
    // https://www.npmjs.com/package/react-typing-animation
    return (
      <Box direction="row" responsive={false} separator="none" align="center">
        <Label>
          {"I  "}
          <IconLike />
        </Label>
        <Box colorIndex={Colors[this.state.currentColor]}>
          <Typing
            loop={true}
            speed={100}
            onFinishedTyping={() => this.cbOnFinishedTyping()}
          >
            {Skills.map((e, i) => {
              const c = i; // Math.floor(Math.random() * Math.floor(Colors.length));
              return (
                <div>
                  <Label>{e}</Label>
                  <Typing.Delay ms={1000} />
                  <Typing.Backspace count={e.length} />
                </div>
              );
            })}
          </Typing>
        </Box>
      </Box>
    );
  }
}

KdoSkillsTyping.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default KdoSkillsTyping;
