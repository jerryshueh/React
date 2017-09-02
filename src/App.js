import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, NavItem, FormGroup, InputGroup, ControlLabel, Form, Checkbox, FormControl, HelpBlock, form, Jumbotron, ProgressBar, Glyphicon, Accordion, Panel, Button,Grid,Col,Row,Thumbnail} from 'react-bootstrap'
import styles from './style.css';
import { SocialIcon } from 'react-social-icons';
import product from './images/product.png' // relative path to image 

class Product extends React.Component { 
    render() { 
        return ( 
            <img src={product} alt={"product"}/> 
        )  
    }
}

const App = () => 
(
  <Router>
    <div>
      <Route path="/" render={() => <Header /> } />
      <Route exact path="/" render={() => <Home /> } />
      <Route path="/about" render={() => <About />} />
      <Route path="/contact" render={() => <Contact />} />
      <Route path="/info" render={() => <Info />} />
      <Route path="/gallery" render={ () => <Gallery />} />
      <Route path="/login" render={ () => <Login />} />
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
          <LinkContainer to="/info">
            <NavItem>Q&A</NavItem>
          </LinkContainer>
          <LinkContainer to="/gallery">
            <NavItem>Gallery</NavItem>
          </LinkContainer>
          <LinkContainer to="/login">
            <NavItem>Login</NavItem>
          </LinkContainer>
        </Nav>
        <Navbar.Form pullRight>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon><Glyphicon glyph="search" /></InputGroup.Addon>
            <FormControl type="text" style={{width:'125px'}} placeholder="Search..." />
          </InputGroup>
        </FormGroup>
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>
  </div>
)
const Login = () => (
  <Jumbotron>
    <Form horizontal>
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={10}>
          <InputGroup>
            <InputGroup.Addon><Glyphicon glyph="user" /></InputGroup.Addon>
            <FormControl type="email" placeholder="Email" />
          </InputGroup>
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalPassword">
        <Col componentClass={ControlLabel} sm={2}>
          Password
        </Col>
        <Col sm={10}>
          <InputGroup>
            <InputGroup.Addon><Glyphicon glyph="lock" /></InputGroup.Addon>
            <FormControl type="password" placeholder="Password" />
          </InputGroup>
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <LinkContainer to="/"><p>Forgot password?</p></LinkContainer>
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="submit">
            Sign in
          </Button>
        </Col>
      </FormGroup>
    </Form>
  </Jumbotron>
)
const Gallery = () => (
  <Grid>
    <Row>
      <Col xs={6} md={4}>
        <LinkContainer to="/login">
          <Thumbnail>
            <h3>Product name</h3>
            <Product />
            <p>Description of the product</p>
            <p>
              <Button bsStyle="success">Buy</Button>&nbsp;
            </p>
          </Thumbnail>
        </LinkContainer> 
      </Col>
      <Col xs={6} md={4}>
        <LinkContainer to="/login">
          <Thumbnail>
            <h3>Product name</h3>
            <Product />
            <p>Description of the product</p>
            <p>
              <Button bsStyle="success">Buy</Button>&nbsp;
            </p>
          </Thumbnail>
        </LinkContainer> 
      </Col>
      <Col xs={6} md={4}>
        <LinkContainer to="/login">
          <Thumbnail>
            <h3>Product name</h3>
            <Product />
            <p>Description of the product</p>
            <p>
              <Button bsStyle="success">Buy</Button>&nbsp;
            </p>
          </Thumbnail>
        </LinkContainer> 
      </Col>
      <Col xs={6} md={4}>
        <LinkContainer to="/login">
          <Thumbnail>
            <h3>Product name</h3>
            <Product />
            <p>Description of the product</p>
            <p>
              <Button bsStyle="success">Buy</Button>&nbsp;
            </p>
          </Thumbnail>
        </LinkContainer> 
      </Col>
      <Col xs={6} md={4}>
        <LinkContainer to="/login">
          <Thumbnail>
            <h3>Product name</h3>
            <Product />
            <p>Description of the product</p>
            <p>
              <Button bsStyle="success">Buy</Button>&nbsp;
            </p>
          </Thumbnail>
        </LinkContainer> 
      </Col>

      
    </Row>
  </Grid>
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
          <SocialIcon url="http://youtube.com" />
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
const Info = () => (
  <div>
  <Jumbotron>
  <Accordion>
    <Panel bsStyle="danger" header="Question #1" eventKey="1">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </Panel>
    <Panel bsStyle="warning" header="Question #2" eventKey="2">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </Panel>
    <Panel bsStyle="info" header="Question #3" eventKey="3">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </Panel>
    <Panel bsStyle="success" header="Question #4" eventKey="4">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </Panel>
  </Accordion>
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