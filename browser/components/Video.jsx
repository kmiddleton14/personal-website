import React from 'react';
import ReactDOM from 'react-dom';
const { Component } = React;
//W0LHTWG-UmQ
import { SocialIcon } from 'react-social-icons';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

export default class Video extends Component {
  render() {
    return (
      <div>
      <div className="video-background">
          <div className="video-foreground">
            <iframe src="https://www.youtube.com/embed/ZkKT3NqW1rw?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>

      <div id="vidtop-content">
      <div className="vid-info">
          <h1>Kathryn Middleton</h1>
          <SocialIcon url="https://www.linkedin.com/in/kmiddleton14" />
          <SocialIcon url="http://twitter.com/jaketrent" />
          <SocialIcon url="https://github.com/kmiddleton14" />
          <SocialIcon url="mailto:kmiddleton14@gmail.com?subject=Hello" />
         <a href="/500/Use-YouTube-Videos-as-Fullscreen-Web-Page-Backgrounds"></a>
        </div>
      </div>
      </div>
    );
  }
}