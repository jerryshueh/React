import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, NavItem, FormGroup, ControlLabel, FormControl, HelpBlock, form, Jumbotron, ProgressBar, Glyphicon} from 'react-bootstrap'
import styles from './style.css';
import { SocialIcon } from 'react-social-icons';

const App = () => 
(
  <Router>
    <div>
      <Route exact path="/" render={() => <Header /> } />
      <Route exact path="/about" render={() => <Header /> } />
      <Route exact path="/contact" render={() => <Header /> } />
      <Route exact path="/" render={() => <Home /> } />
      <Route path="/about" render={() => <About />} />
      <Route path="/contact" render={() => <Contact />} />
      <Route path="/" render={() => <Footer /> } />
    </div>
  </Router>
)
const Header = () => 
(
  <div>    
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <IndexLinkContainer to="/">
            <NavItem>Home</NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/about">
            <NavItem>About</NavItem>
          </LinkContainer>
          <LinkContainer to="/contact">
            <NavItem>Contact</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

const Footer = () => 
(
  <footer className="footer">     
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Toggle />
      </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <div className="copyright">
              <Glyphicon glyph="glyphicon glyphicon-copyright-mark" /> All rights reserved
            </div>
          </Nav>
          <Nav pullRight>
          <SocialIcon url="http://facebook.com" />
          <SocialIcon url="http://twitter.com" />
          <SocialIcon url="http://google.com" />
          <SocialIcon url="http://youtube.com" />
          <SocialIcon url="http://vk.com" />
          <SocialIcon url="https://www.linkedin.com" />
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  </footer>
)

const About = () =>
(
  <div>
  <Jumbotron>
  <h1>Active Progress Bars </h1>
    <ProgressBar bsStyle="success" active now={40} />
    <ProgressBar bsStyle="info" active now={20} />
    <ProgressBar bsStyle="warning" active now={60} />
    <ProgressBar bsStyle="danger" active now={80} />
  </Jumbotron>
  
  </div>
)

const Home = () =>
(
 <div>
  <Jumbotron>
  <h1>Stacked Progress Bar </h1>
  <ProgressBar>
    <ProgressBar striped bsStyle="success" now={35} key={1} />
    <ProgressBar bsStyle="warning" now={20} key={2} />
    <ProgressBar active bsStyle="danger" now={10} key={3} />
  </ProgressBar>
  </Jumbotron>
  </div>
)

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
const FormExample = React.createClass({
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



export default App