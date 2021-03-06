import React from "react";
import PropTypes from "prop-types";

import Quote from 'grommet/components/Quote';
import Paragraph from 'grommet/components/Paragraph';

import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import FormField from 'grommet/components/FormField';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Form from 'grommet/components/Form';
import TextInput from 'grommet/components/TextInput';
import Section from "grommet/components/Section";
import Box from "grommet/components/Box";

import IconDown from "grommet/components/icons/base/Down";

const CustomTextArea = props => <textarea rows="3" type="text"/>

class CvContactForm extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    //this.callbackFunction = this.callbackFunction.bind(this);

    /*
      this.state =
      {
          field1 : value1,
          field2 : value2,
      }
    */
  }

  render() {
    /* code */

    return ( <Section full={true} colorIndex={this.props.colorIndex} justify="around" pad="none">
            <Quote emphasizeCredit={false} size='full'>
              <Form>
                <Header>
                  <Heading>Contact Me !</Heading>
                </Header>
                <FormField label="Your email">
                  <TextInput placeHolder="email@provider.com"/>
                </FormField>
                <FormField label="Your message">
                  <CustomTextArea/>
                </FormField>
                <Footer pad={{"vertical": "medium"}}>
                  <Button label='Submit' type='submit' primary={true} />
                </Footer>
              </Form>
            </Quote>
            <Box align="center">
              <span>Continue below</span>
              <IconDown/>
            </Box>
            </Section>);
  }
}

CvContactForm.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default CvContactForm;
