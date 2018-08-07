import React from "react";
import PropTypes from "prop-types";
import anime from "animejs";

import Box from "grommet/components/Box";
import Label from "grommet/components/Label";

import IconLike from "grommet/components/icons/base/Like";

import "./kdoSkillsTyping.css";

const Skills = [
  "Qt ",
  "C++ ",
  "design",
  "SQLite ",
  "to solve problem",
  "Javascript ",
  "React "
];
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

    this.state = {};
  }

  componentDidMount() {
    var ml4 = {};
    ml4.opacityIn = [0, 1];
    ml4.scaleIn = [0.2, 1];
    ml4.scaleOut = 3;
    ml4.durationIn = 800;
    ml4.durationOut = 600;
    ml4.delay = 500;

    let animeObj = anime.timeline({ loop: true });
    Skills.forEach((e, i) => {
      const targets = `.ml4 .letters-${i}`;
      animeObj
        .add({
          targets: targets,
          opacity: ml4.opacityIn,
          scale: ml4.scaleIn,
          duration: ml4.durationIn
        })
        .add({
          targets: targets,
          opacity: 0,
          scale: ml4.scaleOut,
          duration: ml4.durationOut,
          easing: "easeInExpo",
          delay: ml4.delay
        });
    });
  }

  render() {
    // https://www.npmjs.com/package/react-typing-animation
    return (
      <Box direction="row" separator="none" responsive={false}>
        <Label>I Like</Label>
        <Label className="ml4">
          {Skills.map((e, i) => {
            const classs = `letters letters-${i}`;
            return <span className={classs}>{e}</span>;
          })}
        </Label>
      </Box>
    );
  }
}

KdoSkillsTyping.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default KdoSkillsTyping;
