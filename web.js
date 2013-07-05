var
express = require('express'),
fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buf = new Buffer(fs.readFileSync(__dirname + '/index.html'));
    var indexFile = buf.toString();
    response.send(indexFile);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});