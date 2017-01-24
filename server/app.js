const express = require('express');
const app = express();
const path = require('path');
const projectData = require('../project-data').projectData
const sidebarInfo = require('../project-data').sidebarInfo
const socialIcons = require('../project-data').socialIcons

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
	//const filePath = path.resolve('browser/index.html')
	res.send('Page cleared');
})


const port = 8080;
const server = app.listen(port, function(err) {
	if(err) throw err;
	console.log('server is listneing on port ', port)

})

//React server-side rendering

require('node-jsx').install()
const React = require('react');
const { renderToString } = require('react-dom/server')
const { createStore } = require('redux');
const { Provider } = require('react-redux');
const { reducer } = require('../browser/redux')
const { PageContainer } = require('../browser/page')


app.use('/server', handleRender)


//Handle render function is fired every time the server receives a request
function handleRender(req, res) {
	const preloadedState = {projects: projectData, sidebarInfo: sidebarInfo, socialIcons: socialIcons}

	//create a fresh, new Redux store instance on every request
	const store = createStore(reducer, preloadedState)

	// Render the component to a string
	const html = renderToString(React.createElement(Provider, {store: store}, React.createElement(PageContainer)))
	
	//grab the initial state from our redux store
	const finalState = store.getState()

	//send the redered page back to the client
	res.send(renderFullPage(html, finalState))
}

//this injects our initial coponent HTML and the initial state into a template to be rendered on the client side
function renderFullPage(html, preloadedState) {
  return (
    `<!doctype html>
	<html>
		<head>
			<title>Kathryn Middleton</title>
		    <link href="/style.css" rel="stylesheet" />
		    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" />
	    	<meta charset="utf-8" />
	    	<meta name="viewport" content="width=device-width, initial-scale=1" />
	    	<link rel="stylesheet" href="assets/css/main.css" />
		</head>
		<body>
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrollzer.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>
			<div id='app'>${html}</div>
			<script src="/bundle.js"></script>
			<script>window.__PRELOADED_STATE__ =${JSON.stringify(preloadedState)}</script>
		</body>
	</html>`
    )
}


module.exports = app;