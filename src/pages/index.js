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
          <CvArticle
            title="Hello!"
            small={this.state.small}
            colorIndex="light-2"
          >
            <DescriptionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a felis fermentum, efficitur sapien ac, varius turpis. Donec at elementum mauris. Duis molestie lobortis erat eget facilisis. Vivamus commodo hendrerit lectus, ac ullamcorper velit malesuada id. Vestibulum et mattis sapien. Curabitur vitae vehicula ipsum. Donec non ex vel eros ultricies ultricies. Aliquam nisi tellus, elementum ac risus at, fringilla finibus metus. Aliquam maximus odio quis ligula finibus luctus. Vestibulum id metus tristique, iaculis massa vitae, condimentum arcu. Nam tristique est vel convallis volutpat. Donec ac felis vel ligula vehicula placerat vitae non ante.
            </DescriptionContent>
          </CvArticle>
          { /* ------------------------------------------------------ */ }
          
          <CvArticle title="Experiences" small={this.state.small}>
            <List selectable={false} >
              <ExperienceContent subheading="2013 (8 years, Currently employed)" heading="Blue-Ortho an Exactec Company, Gières">
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
              <Anchor icon={<IconLinkNext/>} label='https://www.exactechgps.com' href='https://www.exactechgps.com' />
              </ExperienceContent>
              <ExperienceContent subheading="2012 (6 month)" heading="Internshipment at Koelis, La Tronche">

              </ExperienceContent>
              <ExperienceContent subheading="2011 (6 month)" heading="Internshipment at GMCAO laboratory, La Tronche">

              </ExperienceContent>
          </List>
          </CvArticle>
          { /* ------------------------------------------------------ */ }
          <CvArticle title="Education" small={this.state.small} colorIndex="light-2" >
            <ExperienceContent subheading="2018 (in progress)" heading="Udemy, Anthony Welc">
              <Anchor icon={<IconLinkNext/>} label='Udemy' href='https://www.udemy.com/user/welc-anthony/' />
            </ExperienceContent>
            <ExperienceContent subheading="2015 (3 days)" heading="Cap'Tronic, Grenoble INP">
            
            </ExperienceContent>
            <ExperienceContent subheading="2009" heading="Joseph Fourier Univeristy, Grenoble">
            
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
                Fluent and technical.
                Document writing.
                Regular meeting and confcall with American partners.
              </LanguageContent>
              <LanguageContent language="German" flag={<SvgGerman/>} >Scholar level.</LanguageContent>
            </Tiles>
          </CvArticle>
          { /* ------------------------------------------------------ */ }
          <CvArticle
            title="This is what I do"
            small={this.state.small}
            colorIndex="light-2"
          />
          { /* ------------------------------------------------------ */ }
          
          <CvArticle title="I like" small={this.state.small} colorIndex="light-1">
            <Tiles fill={true} flush={false} selectable={false}>
              <DiyContent small={this.state.small} propImg={this.props.data.projectMImage1}/>
            </Tiles>
          </CvArticle>
          
          { /* ------------------------------------------------------ */ }
          <CvArticle
            title="Contact"
            small={this.state.small}
            colorIndex="light-2"
          />
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