const project1 = {id: 1, name: 'Possibly broke spacetime', img: 'images/vegetables.jpg', description: 'Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.'}
const project2 = {id: 2, name: 'Terraformed a small moon', img: 'images/water-plant.jpg', description: 'Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.'}
const project3 = {id: 3, name: 'Snapped dark matter in the wild', img: 'images/flowers.jpg', description: 'Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.'}

const sidebarInfo = { topImage: '../../images/Newyork-skyline.jpg', headshotImg:'/images/Headshot.jpg', name: 'Kathryn Middleton', description: 'System.out.println("Hello world!")'}
const tumblrIcon = { id: 1, label: 'Tumblr', class: 'icon fa-tumblr', href: 'https://kmiddleton14.tumblr.com/', }
const twitterIcon = { id: 2, label: 'Twitter', class: 'icon fa-twitter', href: 'https://twitter.com/kmiddleton14', }
const instagramIcon = { id: 3, label: 'LinkedIn', class: 'icon fa-linkedin', href: 'https://www.linkedin.com/in/kmiddleton14', }
const githubIcon = { id: 4, label: 'Github', class: 'icon fa-github', href: 'https://github.com/kmiddleton14', }
const emailIcon = { id: 5, label: 'Email', class: 'icon fa-envelope', href: 'mailto:kmiddleton14@gmail.com?Subject=Hello', }


const projectData = [project1, project2, project3]

const socialIcons = [ tumblrIcon, twitterIcon, instagramIcon, githubIcon, emailIcon]

module.exports = { projectData, sidebarInfo, socialIcons }

