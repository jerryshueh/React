import React from 'react'
import {Jumbotron,ProgressBar} from 'react-bootstrap'

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
export default About;