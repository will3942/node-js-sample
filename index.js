var express = require('express')
var request = require('request')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

var container = {
  "id": process.env.CONTAINER_NAME,
  "type": "tcp",
  "port": 5000,
  "service": { "id": "node-js-sample" }
};

var url = process.env.DISCO_BASE_URI + "/1/containers";
request({ url: url, method: 'POST', json: container}, function(err, response, body) {
	app.listen(app.get('port'), function() {
	  console.log("Node app is running at localhost:" + app.get('port'))
	})
});
