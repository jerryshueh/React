import React from 'react';
import {Carousel} from 'react-bootstrap';
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
    <img alt="space_1" src="http://besthdwallpapers.org/wp-content/uploads/2017/07/landscape-nature-rice-paddy-terraces-mountain-sunset-field.jpg"/>
  </Carousel.Item>
  <Carousel.Item>
    <img alt="space_2" src="https://static.pexels.com/photos/68147/waterfall-thac-dray-nur-buon-me-thuot-daklak-68147.jpeg"/>
  </Carousel.Item>
  <Carousel.Item>
    <img alt="space_3" src="https://i.ytimg.com/vi/QaYmdlpP4Ns/maxresdefault.jpg"/>
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