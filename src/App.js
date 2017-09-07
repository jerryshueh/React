import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import stylesheets
import './css/style.css'
// import modules
import Home from './modules/home'
import Contact from './modules/contact'
import Info from './modules/info'
import About from './modules/about'
import Login from './modules/login'
import Footer from './modules/footer'
import Header from './modules/header'
import Gallery from './modules/gallery'

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

export default App