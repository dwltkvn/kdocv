import React from "react";

import Img from "gatsby-image";

import ListItem from 'grommet/components/ListItem';
import Tile from 'grommet/components/Tile';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Box from "grommet/components/Box";
import Paragraph from 'grommet/components/Paragraph';
import Timestamp from 'grommet/components/Timestamp';
import Card from 'grommet/components/Card';
import Image from 'grommet/components/Image';
import Carousel from 'grommet/components/Carousel';

//import ImgTest from '../images/IMG_20141101_141538.jpg';

const DescriptionContent = props =>
          (<Box align="center">
          <Paragraph size="large">
            
              {props.children}
            </Paragraph></Box>
          );
          
const LanguageContent = props =>
          (<Tile separator='top' align='start' basis='1/4'>
              <Header size='small' pad={{"horizontal": "small"}}>
                <Heading tag='h4' strong={true} margin='none'>
                  {props.language}
                </Heading>
              </Header>
              <Box pad='small'>
                {props.children}
              </Box>
            </Tile>);

const ExperienceContent = props =>
          (<ListItem align='start' alignContent='start' separator='top' margin="medium" direction="column">
              <Header size='small' pad={{"horizontal": "small"}}>
                <Box>
                  <Heading tag='h6' strong={false} margin='none'>{props.subheading}</Heading>
                  <Heading tag='h4' strong={true} margin='none'>{props.heading}</Heading>
                </Box>
              </Header>
              <Box pad='small'>
                {props.children}
              </Box>
            </ListItem>);

const DiyContent = props =>
(<ListItem basis='3/4'>
<Carousel>
  <Img title="Dowlut Kevin" alt="Welcome !" sizes={props.propImg.sizes} style={{}} />
  <Box pad='large'
    colorIndex='neutral-3'>
    <Box pad='medium'
      colorIndex='neutral-2'>
      Content inside of a Box element.
    </Box>
  </Box>
</Carousel>
</ListItem>);

export default {LanguageContent,ExperienceContent,DiyContent,DescriptionContent};