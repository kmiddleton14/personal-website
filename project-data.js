const project1 = {
	id: 1, 
	name: 'Get [F]it Done', 
	img: 'images/GetFitDone.png', 
	description: 'Chrome extension using React.js and Redux that integrates with Fitbit api.  Blocks webpages if user doesn’t get a certain amount of steps every hour.',
	url: 'https://chrome.google.com/webstore/detail/get-fit-done/fecjgkehmgognabbnohaoombfboddooo',
	github: 'https://github.com/katedjackson/get-fit-done'
}

// const project2 = {
// 	id: 2, 
// 	name: 'Tech talk: react server-side rendering', 
// 	img: 'images/ReactServerSideRendering.png', 
// 	description: 'Learn how React can also be used on our server and the differences between client-side versus server-side rendering.',
// 	url: 'https://www.youtube.com/watch?v=PySMaETAgQE',
// 	github: 'https://github.com/kmiddleton14/personal-website'
// }
const project2 = {
	id: 3, 
	name: 'Storecaster', 
	img: 'images/storecaster_logo.png', 
	description: 'E-commerce site that lets users purchase the weather.  Used Postgres, Express.js, React.js, and Redux.',
	url: 'https://www.github.com/kmiddleton14/Storecaster',
	github: 'https://www.github.com/kmiddleton14/Storecaster'
}

const sidebarInfo = { topImage: '../../images/Newyork-skyline.jpg', headshotImg:'/images/Headshot.jpg', name: 'Kathryn Middleton', description: 'System.out.println("Hello world!")'}
const tumblrIcon = { id: 1, label: 'Tumblr', class: 'icon fa-tumblr', href: 'https://kmiddleton14.tumblr.com/', }
const twitterIcon = { id: 2, label: 'Twitter', class: 'icon fa-twitter', href: 'https://twitter.com/kmiddleton14', }
const linkedInIcon = { id: 3, label: 'LinkedIn', class: 'icon fa-linkedin', href: 'https://www.linkedin.com/in/kmiddleton14', }
const githubIcon = { id: 4, label: 'Github', class: 'icon fa-github', href: 'https://github.com/kmiddleton14', }
const emailIcon = { id: 5, label: 'Email', class: 'icon fa-envelope', href: 'mailto:kmiddleton14@gmail.com?Subject=Hello', }


const projectData = [project1, project2]

const socialIcons = [ linkedInIcon, githubIcon, emailIcon, tumblrIcon, twitterIcon ]

module.exports = { projectData, sidebarInfo, socialIcons }

