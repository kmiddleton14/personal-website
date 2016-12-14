const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
	const filePath = path.resolve('browser/index.html')
	res.sendFile(filePath);
})


const port = 8080;
const server = app.listen(port, function(err) {
	if(err) throw err;
	console.log('server is listneing on port ', port)

})


module.exports = app;