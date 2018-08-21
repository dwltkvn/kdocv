import React from "react";

import Img from "gatsby-image";

import ListItem from 'grommet/components/ListItem';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Box from "grommet/components/Box";
import Paragraph from 'grommet/components/Paragraph';
import Timestamp from 'grommet/components/Timestamp';
import Card from 'grommet/components/Card';
import Image from 'grommet/components/Image';
import Carousel from 'grommet/components/Carousel';

import SVGIcon from 'grommet/components/SVGIcon';

//import ImgTest from '../images/IMG_20141101_141538.jpg';

const markHighlightStyle = {
   'backgroundColor': '#eeeeee',
};

const SvgFrance = props =>
        (<SVGIcon viewBox='0 0 640 480' size="xsmall" version='1.1' type='logo' a11yTitle='I Speak French'>
          <g fillRule="evenodd" strokeWidth="1pt">
            <path fill="#fff" d="M0 0h640v480H0z"/>
            <path fill="#00267f" d="M0 0h213.3v480H0z"/>
            <path fill="#f31830" d="M426.7 0H640v480H426.7z"/>
          </g>
        </SVGIcon>);

const SvgUK = props =>
      (<SVGIcon viewBox='0 0 640 480' size="xsmall" version='1.1' type='logo' a11yTitle='I Speak English'>
        <defs>
          <clipPath id="a">
            <path fillOpacity=".7" d="M-85.3 0h682.6v512H-85.3z"/>
          </clipPath>
        </defs>
        <g clipPath="url(#a)" transform="translate(80) scale(.94)">
          <g strokeWidth="1pt">
            <path fill="#006" d="M-256 0H768v512H-256z"/>
            <path fill="#fff" d="M-256 0v57.2L653.5 512H768v-57.2L-141.5 0H-256zM768 0v57.2L-141.5 512H-256v-57.2L653.5 0H768z"/>
            <path fill="#fff" d="M170.7 0v512h170.6V0H170.7zM-256 170.7v170.6H768V170.7H-256z"/>
            <path fill="#c00" d="M-256 204.8v102.4H768V204.8H-256zM204.8 0v512h102.4V0H204.8zM-256 512L85.3 341.3h76.4L-179.7 512H-256zm0-512L85.3 170.7H9L-256 38.2V0zm606.4 170.7L691.7 0H768L426.7 170.7h-76.3zM768 512L426.7 341.3H503l265 132.5V512z"/>
          </g>
        </g>
      </SVGIcon>);
  
  
const SvgGerman = props =>
      (<SVGIcon viewBox='0 0 640 480' size="xsmall" version='1.1' type='logo' a11yTitle='I Speak German'>
          <path fill="#ffce00" d="M0 320h640v160H0z"/>
          <path d="M0 0h640v160H0z"/>
          <path fill="#d00" d="M0 160h640v160H0z"/>
        </SVGIcon>);
  
const DescriptionContent = props =>
          (<Box align="center">
          <Paragraph size="large">
              {props.children}
            </Paragraph></Box>
          );
          
const LanguageContent = props =>
          (<Tile separator='top' align='start' basis='1/4'>
              <Box pad="none" full="horizontal" direction="row">
                {props.flag}
                <Header size='small' pad={{"horizontal": "small"}}>
                  <Heading tag='h4' strong={true}>
                    {props.language}
                  </Heading>
                </Header>
              </Box>
              <Box>
                {props.children}
              </Box>
            </Tile>);

const ExperienceContent = props =>
          (<ListItem align='start' alignContent='start' separator='top' margin={ {top:"small"} } direction="column">
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
{
  const basisSize = props.small ? "3/4":"1/2";
  
  return (<ListItem basis={basisSize}>
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
}

const SkillsContent = props =>
{
  const align = props.small ? "center":"stretch";
  return (
    <Tiles fill={true} flush={false}>
      <Tile colorIndex="neutral-1-a">
        <b>Programming language</b>
        <Box direction="row" justify="around" alignSelf={align} separator="top">
          <span><mark style={markHighlightStyle}>&nbsp;C/C++&nbsp;</mark></span>
          <span><mark style={markHighlightStyle}>&nbsp;Qt&nbsp;</mark></span>
          <span>ASM (Assembly)</span>
        </Box>
      </Tile>
      
      <Tile colorIndex="neutral-2-a">
        <b>Script language</b>
        <Box direction="row" justify="around" alignSelf={align} separator="top">
          <span><mark style={markHighlightStyle}>&nbsp;Javascript&nbsp;</mark></span>
          <span><mark style={markHighlightStyle}>&nbsp;SQLite&nbsp;</mark></span>
          <span>Matlab</span>
          <span>Python (beginner)</span>
        </Box>
      </Tile>
      <Tile colorIndex="neutral-3-a">
        <b>Development Tools</b>
        <Box direction="row" justify="around" alignSelf={align} separator="top">
          <span>SVN</span>
          <span><mark style={markHighlightStyle}>&nbsp;GIT&nbsp;</mark></span>
          <span><mark style={markHighlightStyle}>&nbsp;Visual Studio&nbsp;</mark></span>
          <span>Qt Studio</span>
        </Box>
      </Tile>
      <Tile colorIndex="neutral-2-a">
        <b>Firmware Maintenance</b>
        <Box direction="row" justify="around" alignSelf={align} separator="top">
          <span>Microcontroller Atmel</span>
          <span>Altera FPGA</span>
          <span>Cypress FX USB</span>
        </Box>
      </Tile>
      <Tile colorIndex="neutral-3-a">
        <b>Operating System</b>
        <Box direction="row" justify="around" alignSelf={align} separator="top">
          <span>Windows</span>
          <span>Linux</span>
          <span>Android</span>
        </Box>
      </Tile>
      <Tile colorIndex="neutral-1-a">
        <b>Image Processing & CAD</b>
        <Box direction="row" justify="around" alignSelf={align} separator="top">
          <span>Image Processing</span>
          <span>Computer Vision</span>
          <span>Scientific Visualization</span>
          <span>Image Synthesis</span>
          <span>Mathematical Morphology</span>
        </Box>
      </Tile>
    </Tiles>
    );
}

export default {LanguageContent,ExperienceContent,DiyContent,DescriptionContent,SvgFrance,SvgUK,SvgGerman,SkillsContent};