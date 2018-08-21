import React from "react";

import Split from "grommet/components/Split";
import Box from "grommet/components/Box";
import Responsive from "grommet/utils/Responsive";

import Paragraph from 'grommet/components/Paragraph';
import Tiles from 'grommet/components/Tiles';
import List from 'grommet/components/List';
import Anchor from 'grommet/components/Anchor';

import KdoCard from "../components/kdoCard";
import CvArticle from "../components/cvArticle";
import KdoSocial from "../components/kdoSocial";
import {LanguageContent,ExperienceContent,DiyContent,DescriptionContent,SvgFrance,SvgUK,SvgGerman, SkillsContent} from "../components/cvArticleContent";
import Toast from 'grommet/components/Toast';

import IconLinkNext from "grommet/components/icons/base/LinkNext";

import "./styles.css";

const markHighlightStyle = {
   'backgroundColor': '#fdfd96',
};

export default class Index extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this._onResponsive = this._onResponsive.bind(this);
    this.state =
    {
      small : false,
      componentMounted : false,
      showContactToast : false,
    }
  }

  componentDidMount() {
    this._responsive = Responsive.start(this._onResponsive);
    this.setState( {componentMounted:true} );
  }

  componentWillUnmount() {
    this._responsive.stop();
  }

  _onResponsive(small) {
    this.setState({ small });
  }
  
  

  render() {
    return (
      <Split
        separator={false}
        flex="right"
        fixed={true}
        priority="right"
        showOnResponsive="both"
      >
        <KdoCard propImg={this.props.data.headerImage} propOnContactClick={ () => this.setState( {showContactToast:true}) }/>
        {
          this.state.componentMounted ?
        <Box>
          {
            this.state.showContactToast?
            <Toast status='ok' onClose={ () => this.setState( {showContactToast:false} ) }>Please, send me an email at dowlut.kevin [at] gmail.com</Toast>
            :null
          }
          <CvArticle title="Hello!" small={this.state.small} colorIndex="light-2">
            <DescriptionContent>
            I'm Dowlut Kevin and i'm <mark style={markHighlightStyle}>currently looking for a software developer position</mark>. Following my Master degree in image processing, I have been lucky enough to work for more than 8 years in medical fields.</DescriptionContent>
            <DescriptionContent>Theses experiences allowed me to expand my skills beyond software area: Hardware, Electronic, Optic, Quality Assurance, Embedded System, Field Support, Production Constraint, Validation Test Campaign and much more !
            </DescriptionContent>
          </CvArticle>
          { /* ------------------------------------------------------ */ }
          <CvArticle title="Experiences" small={this.state.small}>
            <List selectable={false} >
              <ExperienceContent subheading="2010 (8 years, Currently employed)" heading="Blue-Ortho an Exactec Company, Gières">
              Development of a real time camera localizer for computer assisted surgery:
                <ul>
                  <li>Development of a <mark style={markHighlightStyle}>‘core’ library</mark> integrated to clinical applications.</li>
                  <li>Study of <mark style={markHighlightStyle}>camera hardware and optic dysfunctions</mark>.</li>
                  <li>Creation of <mark style={markHighlightStyle}>production tools allowing calibration</mark> of camera localizer and theirs trackers.</li>
                  <li>Application of medical device standard ISO62304.</li>
                  <li><mark style={markHighlightStyle}>Technical specifications</mark> and test plans writing.</li>
                  <li>Perform <mark style={markHighlightStyle}>validation campaign</mark> of clinical applications.</li>
                  <li><mark style={markHighlightStyle}>Client support</mark>, production team support and logs analysis.</li>
                  <li>Portability study of existing Qt application to MacOS and Android.</li>
              </ul>
              <Anchor icon={<IconLinkNext/>} label='Exactechgps website' href='https://www.exactechgps.com' />
              </ExperienceContent>
              <ExperienceContent subheading="2009 (6 month, Internshipment)" heading="Koelis Company, La Tronche">
                <ul>
                <li>Development of an algorithm that performs the segmentation of the biopsy needle trajectory in an ultrasound image volume (C++/MFC).</li>
                <li>Implementation of a validation tracking method of the registration in an ultrasound prostate image volume (C++/MFC).</li>
                </ul>
                <Anchor icon={<IconLinkNext/>} label='Koelis website' href='https://koelis.com/' />
              </ExperienceContent>
              <ExperienceContent subheading="2008 (6 month, Internshipment)" heading="TIMC-GMCAO laboratory, La Tronche">
                <ul>
                <li>Development of a software that allows a semi-automatic segmentation of a prostate ultrasound image volume (C++/MFC).</li>
                </ul>
                <Anchor icon={<IconLinkNext/>} label='TIMC-GMCAO website' href='http://www-timc.imag.fr/rubrique9.html' />
              </ExperienceContent>
          </List>
          </CvArticle>
          { /* ------------------------------------------------------ */ }
          <CvArticle title="Education" small={this.state.small} colorIndex="light-2" >
            <ExperienceContent subheading="2018 (in progress)" heading="Udemy, Anthony Welc">
              <span>Trainings on my own initiative aiming to learn and develop <mark style={markHighlightStyle}><a href='https://developers.google.com/web/progressive-web-apps/'>Progressive Web App (PWA)</a></mark> using modern web technologies (ECMAScript, React, JAMStack, ...).</span>
              
              <Anchor icon={<IconLinkNext/>} label='Udemy website' href='https://www.udemy.com/user/welc-anthony/' />
            </ExperienceContent>
            <ExperienceContent subheading="2015 (3 days)" heading="Cap'Tronic, Grenoble INP">
              Practical training to FPGA technology and VHDL language.
              <Anchor icon={<IconLinkNext/>} label='Training overview' href='https://www.dropbox.com/s/8xdbb463zapdgmw/Programme_FPGA.PDF?dl=0' />
            </ExperienceContent>
            <ExperienceContent subheading="2009" heading="Joseph Fourier University, Grenoble">
              <ul>
                <li>Successfully passed <mark style={markHighlightStyle}>professional Master degree in Images and CAD engineering</mark>. First Class honor.</li>
                <li>Followed <mark style={markHighlightStyle}>Magistère graduate degree</mark> for 3 years. Passed with distinction.</li>
              </ul>
            </ExperienceContent>
          </CvArticle>
          { /* ------------------------------------------------------ */ }
          <CvArticle title="Technical Skills" small={this.state.small} colorIndex="light-1">
            <SkillsContent small={this.state.small}/>
          </CvArticle>
          { /* ------------------------------------------------------ */ }
          <CvArticle
            title="Languages"
            small={this.state.small}
            colorIndex="light-2"
          >
            <Tiles fill={true} flush={false} selectable={false}>
              <LanguageContent language="French" flag={<SvgFrance/>}>Native speaker.</LanguageContent>
              <LanguageContent language="English" flag={<SvgUK/>}>
                <div>Fluent and technical.</div>
                <div>Document writing.</div>
                <div>Regular meeting and confcall with American partners.</div>
              </LanguageContent>
              <LanguageContent language="German" flag={<SvgGerman/>} >Scholar level.</LanguageContent>
            </Tiles>
          </CvArticle>
          { /* ------------------------------------------------------ */ }
          
          <CvArticle title="I like" small={this.state.small} colorIndex="light-1">
            <Tiles fill={true} flush={false} selectable={false}>
              <DiyContent small={this.state.small} propImg={this.props.data.projectMImage1}/>
            </Tiles>
          </CvArticle>
          
          { /* ------------------------------------------------------ */ }
        </Box> : null }
      </Split>
    );
  }
}

export const pageQuery = graphql`
  query HeaderImageQuery {
    headerImage: imageSharp(id: { regex: "/kdo.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    },
    projectMImage1: imageSharp(id: { regex: "/cao-courbe-surface-subdivision.png/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`