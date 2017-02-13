const express = require('express');
const app = express();
const volleyball = require('volleyball');
const path = require('path');
const projectData = require('../project-data').projectData
const sidebarInfo = require('../project-data').sidebarInfo
const socialIcons = require('../project-data').socialIcons

app.use(volleyball);
app.use('/public', express.static('public'));

app.use(express.static(path.join(__dirname, '../browser')));


// send index.html
const indexPath = __dirname + '../browser/index.html'
app.get('/', (req, res) =>{
  res.sendFile(indexPath)
})


app.get('/api/projects', function (req, res) {
  res.send(projectData)
})

app.get('/api/sidebar', function (req, res) {
  res.send(sidebarInfo)
})

app.get('/api/socialIcons', function (req, res) {
  res.send(socialIcons)
})

const port = 1337;
const server = app.listen(port, function(err) {
	if(err) throw err;
	console.log('server is listneing on port ', port)

})



module.exports = app;