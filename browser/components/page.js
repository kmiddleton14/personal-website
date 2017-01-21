import React from 'react';
import ReactDOM from 'react-dom';
const { Component } = React;





export default class Page extends Component {
  render() {
    return (
      <div>
        <section id="header">
          <header>
            <span className="image avatar"><img src="images/Headshot.jpg" alt="" /></span>
            <h1 id="logo"><a href="#">Kathryn Middleton</a></h1>
            <p>System.out.println("Hello world!")</p>
          </header>
          <nav id="nav">
            <ul>
              <li><a href="#one" className="active">About</a></li>
              <li><a href="#two">Things I Can Do</a></li>
              <li><a href="#three">A Few Accomplishments</a></li>
              <li><a href="#four">Contact</a></li>
            </ul>
          </nav>
          <footer>
            <ul className="icons">
              <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
              <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
              <li><a href="#" className="icon fa-envelope"><span className="label">Email</span></a></li>
            </ul>
          </footer>
        </section>


        <div id="wrapper">


            <div id="main">


                <section id="one">
                  <div className="container">
                    <header className="major">
                      <h2>Welcome!</h2>
                      <p>Just an incredibly simple responsive site.</p>
                    </header>
                    <p>I'm Kathryn, a Software Developer who has 2.5 years of working experience as a developer. I've worked with Java, .NET, JavaScript, Node, React, Redux, Express, SQL, Postgres, and HTML/CSS</p>
                  </div>
                </section>

                <section id="two">
                  <div className="container">
                    <h3>Things I Can Do</h3>
                    <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer lorem ipsum dolor sit amet.</p>
                    <ul className="feature-icons">
                      <li className="fa-code">Write all the code</li>
                      <li className="fa-cubes">Stack small boxes</li>
                      <li className="fa-book">Read books and stuff</li>
                      <li className="fa-coffee">Drink much coffee</li>
                      <li className="fa-bolt">Lightning bolt</li>
                      <li className="fa-users">Shadow clone technique</li>
                    </ul>
                  </div>
                </section>

                <section id="three">
                  <div className="container">
                    <h3>A Few Accomplishments</h3>
                    <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer. Integer eu ante ornare amet commetus.</p>
                    <div className="features">
                      <article>
                        <a href="#" className="image"><img src="images/vegetables.jpg" alt="" /></a>
                        <div className="inner">
                          <h4>Possibly broke spacetime</h4>
                          <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.</p>
                        </div>
                      </article>
                      <article>
                        <a href="#" className="image"><img src="images/flowers.jpg" alt="" /></a>
                        <div className="inner">
                          <h4>Terraformed a small moon</h4>
                          <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.</p>
                        </div>
                      </article>
                      <article>
                        <a href="#" className="image"><img src="images/camera.jpg" alt="" /></a>
                        <div className="inner">
                          <h4>Snapped dark matter in the wild</h4>
                          <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.</p>
                        </div>
                      </article>
                    </div>
                  </div>
                </section>


                <section id="four">
                  <div className="container">
                    <h3>Contact Me</h3>
                    <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer. Integer eu ante ornare amet commetus.</p>
                    <form method="post" action="#">
                      <div className="row uniform">
                        <div className="6u 12u(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                        <div className="6u 12u(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                      </div>
                      <div className="row uniform">
                        <div className="12u"><input type="text" name="subject" id="subject" placeholder="Subject" /></div>
                      </div>
                      <div className="row uniform">
                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="6"></textarea></div>
                      </div>
                      <div className="row uniform">
                        <div className="12u">
                          <ul className="actions">
                            <li><input type="submit" className="special" value="Send Message" /></li>
                            <li><input type="reset" value="Reset Form" /></li>
                          </ul>
                        </div>
                      </div>
                    </form>
                  </div>
                </section>


            </div>

            <section id="footer">
              <div className="container">
                <ul className="copyright">
                  <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
              </div>
            </section>

        </div>
      </div>
    );
  }
}