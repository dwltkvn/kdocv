import React from "react";

import Split from "grommet/components/Split";
import Box from "grommet/components/Box";
import Responsive from "grommet/utils/Responsive";

import Paragraph from 'grommet/components/Paragraph';
import Tiles from 'grommet/components/Tiles';
import List from 'grommet/components/List';
import Anchor from 'grommet/components/Anchor';
import SVGIcon from 'grommet/components/SVGIcon';

import KdoCard from "../components/kdoCard";
import CvArticle from "../components/cvArticle";
import KdoSocial from "../components/kdoSocial";
import {LanguageContent,ExperienceContent,DiyContent,DescriptionContent,SvgFrance,SvgUK,SvgGerman} from "../components/cvArticleContent";
import CvContactForm from "../components/cvContactForm";

import IconLinkNext from "grommet/components/icons/base/LinkNext";

import "./styles.css";

const markHighlightStyle = {
   'background-color': '#fdfd96',
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
        <KdoCard propImg={this.props.data.headerImage}/>
        
        {
          this.state.componentMounted ?
        <Box>
        {this.state.small?<span>small</span>:<span>big</span>}
          <CvArticle title="Hello!" small={this.state.small} colorIndex="light-2">
            <DescriptionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a felis fermentum, efficitur sapien ac, varius turpis. Donec at elementum mauris. Duis molestie lobortis erat eget facilisis. Vivamus commodo hendrerit lectus, ac ullamcorper velit malesuada id. Vestibulum et mattis sapien. Curabitur vitae vehicula ipsum. Donec non ex vel eros ultricies ultricies. Aliquam nisi tellus, elementum ac risus at, fringilla finibus metus. Aliquam maximus odio quis ligula finibus luctus. Vestibulum id metus tristique, iaculis massa vitae, condimentum arcu. Nam tristique est vel convallis volutpat. Donec ac felis vel ligula vehicula placerat vitae non ante.
            </DescriptionContent>
          </CvArticle>
          { /* ------------------------------------------------------ */ }
          <CvContactForm/>
          { /* ------------------------------------------------------ */ }
          <CvArticle title="Experiences" small={this.state.small}>
            <List selectable={false} >
              <ExperienceContent subheading="2010 (8 years, Currently employed)" heading="Blue-Ortho an Exactec Company, Gières">
              Développement d’une caméra de localisation temps réel 3D pour la chirurgie assistée par ordinateur:
                <ul>
                  <li>Développement de <mark style={markHighlightStyle}>bibliothèques ‘core’</mark> intégrées aux applications cliniques.</li>
                  <li>Etude de dysfonctionnement matériel et optique de la caméra.</li>
                  <li>Développement d’outils de production permettant la calibration des caméras de localisation et de leurs trackers.</li>
                  <li>Application des normes des logiciels pour dispositif médicaux ISO62304.</li>
                  <li>Rédaction de spécifications techniques et plans de tests.</li>
                  <li>Exécution de campagnes de validation des applications cliniques.</li>
                  <li>Support client, support de l’équipe de production et analyse de logs.</li>
                  <li>Etude de portabilité d’applications QT existantes vers MacOS et Android.</li>
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
              <span>Trainings on my own initiative aiming to learn and develop <a href='https://developers.google.com/web/progressive-web-apps/'>Progressie Web App (PWA)</a> using modern web technologies (ECMAScript, React, JAMStack, ...).</span>
              
              <Anchor icon={<IconLinkNext/>} label='Udemy website' href='https://www.udemy.com/user/welc-anthony/' />
            </ExperienceContent>
            <ExperienceContent subheading="2015 (3 days)" heading="Cap'Tronic, Grenoble INP">
            
            </ExperienceContent>
            <ExperienceContent subheading="2009" heading="Joseph Fourier Univeristy, Grenoble">
              <ul>
                <li>Successfully passed <mark style={markHighlightStyle}>professional Master degree in Images and CAD engineering</mark>. First Class honor.</li>
                <li>Followed <mark style={markHighlightStyle}>Magistère graduate degree</mark> for 3 years. Passed with distinction.</li>
              </ul>
            </ExperienceContent>
          </CvArticle>
          { /* ------------------------------------------------------ */ }
          <CvArticle
            title="Languages"
            small={this.state.small}
            colorIndex="light-1"
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
          
          <CvArticle title="I like" small={this.state.small} colorIndex="light-2">
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