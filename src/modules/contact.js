import React from 'react'
import {Jumbotron, FormGroup, InputGroup, ControlLabel, Form, FormControl, HelpBlock, form} from 'react-bootstrap'
import createReactClass from 'create-react-class'

const Contact = () =>
(
  <div>
  <Jumbotron>
    <FormExample />
  </Jumbotron>
  <Jumbotron>
    <FormExample />
  </Jumbotron>
  <Jumbotron>
    <FormExample />
  </Jumbotron>
  </div>
)
// form example
const FormExample = createReactClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Form validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
    );
  }
});
export default Contact;