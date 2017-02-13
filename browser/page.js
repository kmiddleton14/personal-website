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
              <p>
                <ul className="icons">

                { this.props.socialIcons.map( socialIcon => {
                    return(
                      <li><a key={socialIcon.id} href={socialIcon.href} className={socialIcon.class}><span className="label">{socialIcon.label}</span></a></li>
                   )
                  }) 
                }
                </ul>
              </p>
            </header>
            <nav id="nav">
              <ul>
                <li><a href="#one" className="active">About</a></li>
                <li><a href="#two">Technical Skills</a></li>
                <li><a href="#three">Recent Projects</a></li>
                <li><a href="#four">Tech Talk</a></li>
                <li><a href="images/Kathryn Middleton Resume.pdf">Download Resume</a></li>
              </ul>
            </nav>
          </section>


          <div id="wrapper">
              <div id="main">
                  <section id="one">
                    <div className="container">
                      <header className="major">
                        <h2>Welcome!</h2>
                        <p>I'm Kathryn, a full stack software engineer</p>
                      </header>
                      <p>I have over 2 years of working experience at IHS Markit. I've worked with Java, .NET, JavaScript, Node, React, Redux, Express, Sequelize, Postgres, and HTML5/CSS.  I have a passion to code and to explore new technologies while also getting others excited about coding too.</p>
                    </div>
                  </section>
                  <section id="two">
                     <div className="container">
                       <h3>Technical Skills</h3>
                       <p></p>
                       <ul className="feature-icons">
                         <li className="fa-code">Java, .NET, JavaScript</li>
                         <li className="fa-cubes">PostgreSQL, MySQL, Sequelize</li>
                         <li className="fa-users">Digital Marketing</li>
                         <li className="fa-github-square">Github</li>
                         <li className="fa-code-fork">Agile Development</li>
                         <li className="fa-chevron-right">UNIX</li>
                       </ul>
                     </div>
                   </section>
                  <section id="three">
                    <div className="container">
                      <h3>Recent Projects</h3>
                      <div className="features">
                        { this.props.projects.map( project => {
                            return(
                              <article key={project.id}>
                                <a href={project.url} className="image"><img src={project.img} alt="" /></a>
                                <div className="inner">
                                  <h4>{project.name}</h4>
                                  <p>{project.description} </p>
                                  <ul className="actions small">
                                    <li><a href={project.github} className="button special small">Github</a></li>
                                    {project.deployedUrl ? <li><a href={project.deployedUrl} className="button special small">Deployed Site</a></li> : <li></li>}
                                    
                                  </ul>
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
                      <h3>Tech Talk: How to use React server-side rendering</h3>
                      <p>Learn how React can also be used on our server and the differences between client-side versus server-side rendering</p>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/PySMaETAgQE" frameborder="0" allowfullscreen></iframe>
                    </div>
                  </section>  
              </div>
          </div>
        </div>
    )
  }
 }

 const mapState = state => ({projects: state.projects, sidebarInfo: state.sidebarInfo, socialIcons: state.socialIcons})
 
 const PageContainer = connect(mapState)(PageComponent)

 module.exports = {PageContainer: PageContainer}


