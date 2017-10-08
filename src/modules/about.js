import React from 'react'
import {Carousel} from 'react-bootstrap'

const About = () =>
(
  <div>
  <Carousel className="car">
  <Carousel.Item>
    <img alt="space_1" src="http://besthdwallpapers.org/wp-content/uploads/2017/07/landscape-nature-rice-paddy-terraces-mountain-sunset-field.jpg"/>
  </Carousel.Item>
  <Carousel.Item>
    <img alt="space_2" src="https://static.pexels.com/photos/68147/waterfall-thac-dray-nur-buon-me-thuot-daklak-68147.jpeg"/>
  </Carousel.Item>
  <Carousel.Item>
    <img alt="space_3" src="https://i.ytimg.com/vi/QaYmdlpP4Ns/maxresdefault.jpg"/>
  </Carousel.Item>
  </Carousel>
  <div className="base">
  </div>
</div>
)
export default About;