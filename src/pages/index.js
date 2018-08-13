import React from "react";

import Split from "grommet/components/Split";
import Box from "grommet/components/Box";
import Responsive from "grommet/utils/Responsive";

import Paragraph from 'grommet/components/Paragraph';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

import KdoCard from "../components/kdoCard";
import CvArticle from "../components/cvArticle";
import KdoSocial from "../components/kdoSocial";
import {LanguageContent,ExperienceContent} from "../components/cvArticleContent";

import "./styles.css";

export default class Index extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this._onResponsive = this._onResponsive.bind(this);
    this.state =
    {
      small : false,
    }
  }

  componentDidMount() {
    this._responsive = Responsive.start(this._onResponsive);
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
        <Box>
          <CvArticle
            title="Hello!"
            small={this.state.small}
            colorIndex="light-2"
          >
            <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a felis fermentum, efficitur sapien ac, varius turpis. Donec at elementum mauris. Duis molestie lobortis erat eget facilisis. Vivamus commodo hendrerit lectus, ac ullamcorper velit malesuada id. Vestibulum et mattis sapien. Curabitur vitae vehicula ipsum. Donec non ex vel eros ultricies ultricies. Aliquam nisi tellus, elementum ac risus at, fringilla finibus metus. Aliquam maximus odio quis ligula finibus luctus. Vestibulum id metus tristique, iaculis massa vitae, condimentum arcu. Nam tristique est vel convallis volutpat. Donec ac felis vel ligula vehicula placerat vitae non ante.
            </Paragraph>
          </CvArticle>
          { /* ------------------------------------------------------ */ }
          <CvArticle title="Experiences" small={this.state.small}>
            <List selectable={true} >
              <ExperienceContent startingDate="2013" endingDate="Currently employed" company="Blue-Ortho" city="Gières">
              Développement d’une caméra de localisation temps réel 3D pour la chirurgie assistée par ordinateur ( ➝ https://www.exactechgps.com ):
                <ul>
                  <li>Développement de bibliothèques ‘core’ intégrées aux applications cliniques.</li>
                  <li>Etude de dysfonctionnement matériel et optique de la caméra.</li>
                  <li>Développement d’outils de production permettant la calibration des caméras de localisation et de leurs trackers.</li>
                  <li>Application des normes des logiciels pour dispositif médicaux ISO62304.</li>
                  <li>Rédaction de spécifications techniques et plans de tests.</li>
                  <li>Exécution de campagnes de validation des applications cliniques.</li>
                  <li>Support client, support de l’équipe de production et analyse de logs.</li>
                  <li>Etude de portabilité d’applications QT existantes vers MacOS et Android.</li>
              </ul>
              </ExperienceContent>
          </List>
          </CvArticle>
          { /* ------------------------------------------------------ */ }
          <CvArticle
            title="Education"
            small={this.state.small}
            colorIndex="light-2"
          >
            <ExperienceContent startingDate="2018" endingDate="2009" company="Udemy" city="Anthony Welc">
            
            </ExperienceContent>
            <ExperienceContent startingDate="2015" endingDate="(3 days)" company="Cap'Tronic" city="Grenoble INP">
            
            </ExperienceContent>
            <ExperienceContent startingDate="2009" endingDate="2009" company="Joseph Fourier Univeristy" city="Grenoble">
            
            </ExperienceContent>
          </CvArticle>
          { /* ------------------------------------------------------ */ }
          <CvArticle
            title="Languages"
            small={this.state.small}
            colorIndex="light-1"
          >
            <Tiles fill={true} flush={false} selectable={true}>
              <LanguageContent language="French">Native speaker.</LanguageContent>
              <LanguageContent language="English">
                Fluent and technical.
                Document writing.
                Regular meeting and confcall with American partners.
              </LanguageContent>
              <LanguageContent language="German">Scholar level.</LanguageContent>
            </Tiles>
          </CvArticle>
          { /* ------------------------------------------------------ */ }
          <CvArticle
            title="This is what I do"
            small={this.state.small}
            colorIndex="light-2"
          />
          { /* ------------------------------------------------------ */ }
          <CvArticle
            title="I like"
            small={this.state.small}
            colorIndex="light-1"
          />
          { /* ------------------------------------------------------ */ }
          <CvArticle
            title="Contact"
            small={this.state.small}
            colorIndex="light-2"
          />
        </Box>
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
    }
  }
`