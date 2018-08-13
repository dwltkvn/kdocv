import React from "react";

import ListItem from 'grommet/components/ListItem';
import Tile from 'grommet/components/Tile';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Box from "grommet/components/Box";
import Paragraph from 'grommet/components/Paragraph';

const LanguageContent = props =>
          (<Tile separator='top' align='start' basis='1/4'>
              <Header size='small' pad={{"horizontal": "small"}}>
                <Heading tag='h4' strong={true} margin='none'>
                  {props.language}
                </Heading>
              </Header>
              <Box pad='small'>
                <Paragraph margin='none'>
                  {props.children}
                </Paragraph>
              </Box>
            </Tile>);

const ExperienceContent = props =>
          (<ListItem align='start' alignContent='start' separator='top' margin="medium" direction="column">
              <Header size='small' pad={{"horizontal": "small"}}>
                <Heading tag='h4' strong={true} margin='none'>
                  <div>{props.startingDate} to {props.endingDate}</div>
                  <div>{props.company}, {props.city}</div>
                </Heading>
              </Header>
              <Box pad='small'>
                <Paragraph margin='none'>
                  {props.children}
                </Paragraph>
              </Box>
            </ListItem>);

export default {LanguageContent,ExperienceContent};