'use strict';
const React = require('react')
const { connect } = require('react-redux');




 class PageComponent extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount() {
    console.log('component did mount')
    
  }


  render() {
    
    return (
        <div >
          <section id="header">
            <header>
              <span className="image avatar"><img src={this.props.sidebarInfo.headshotImg} alt="" /></span>
              <h1 id="logo"><a href="#">{this.props.sidebarInfo.name}</a></h1>
              <p>{this.props.sidebarInfo.description}</p>
            </header>
            <nav id="nav">
              <ul>
                <li><a href="#one" className="active">About</a></li>
                <li><a href="#two">Skills</a></li>
                <li><a href="#three">A Few Projects</a></li>
                <li><a href="#four">Contact</a></li>
              </ul>
            </nav>
            <footer>
              <ul className="icons">

              { this.props.socialIcons.map( socialIcon => {
                  return(
                    <li><a key={socialIcon.id} href={socialIcon.href} className={socialIcon.class}><span className="label">{socialIcon.label}</span></a></li>
                 )
                }) 
              }
              </ul>
            </footer>
          </section>


          <div id="wrapper">


              <div id="main">

                  <img className="image background" src={this.props.sidebarInfo.topImage} />
                  <section id="one">
                    <div className="container">
                      <header className="major">
                        <h2>Welcome!</h2>
                        <p>Just a simple portfolio site using React.</p>
                      </header>
                      <p>I'm Kathryn, a Software Developer who has over 2 years of working experience. I've worked with Java, .NET, JavaScript, Node, React, Redux, Express, Sequelize, Postgres, and HTML/CSS</p>
                    </div>
                  </section>

                  <section id="two">
                    <div className="container">
                      <h3>Key Skills</h3>
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
                      <h3>A Few Projects</h3>
                      <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer. Integer eu ante ornare amet commetus.</p>
                      <div className="features">
                        { this.props.projects.map( project => {
                            return(
                              <article key={project.id}>
                                <a href="#" className="image"><img src={project.img} alt="" /></a>
                                <div className="inner">
                                  <h4>{project.name} </h4>
                                  <p>{project.description}</p>
                                </div>
                              </article>
                           )
                          }) 
                        }
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
    )
  }
 }

 const mapState = state => ({projects: state.projects, sidebarInfo: state.sidebarInfo, socialIcons: state.socialIcons})
 
 const PageContainer = connect(mapState)(PageComponent)

 module.exports = {PageContainer: PageContainer}


