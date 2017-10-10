import React from 'react';
import { Player, ControlBar, CurrentTimeDisplay, TimeDivider, VolumeMenuButton, BigPlayButton
} from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import poster from '../images/poster.png';
import video from '../videos/sw.mp4';

const About = () =>
(
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
)
export default About;