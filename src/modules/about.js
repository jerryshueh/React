import React from 'react';
import {Carousel} from 'react-bootstrap';
import slide1 from '../images/slider/1.jpg';
import slide2 from '../images/slider/2.jpg';
import slide3 from '../images/slider/3.jpg';

import { Player, ControlBar, CurrentTimeDisplay, TimeDivider, VolumeMenuButton, BigPlayButton
} from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import poster from '../images/poster.png';
import video from '../videos/sw.mp4';

const About = () =>
(
  <div>
  <Carousel className="car">
  <Carousel.Item>
    <img alt="space_1" src={slide1} />
  </Carousel.Item>
  <Carousel.Item>
    <img alt="space_2" src={slide2}/>
  </Carousel.Item>
  <Carousel.Item>
    <img alt="space_3" src={slide3}/>
  </Carousel.Item>
  </Carousel>
  <br />
  <div className="jumbotron">
    <Player poster={poster}>
      <source src={video} />
      <BigPlayButton position="center" />
      <ControlBar>
        <CurrentTimeDisplay order={4.1} />
        <TimeDivider order={4.2} />
        <VolumeMenuButton />
      </ControlBar>
    </Player>
  </div>
</div>
)
export default About;