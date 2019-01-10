var express = require('express');

var server = express();
server.use(express.static(__dirname + '/public'));

var port = 8080;


server.post('/resource/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({
    suggestions: ['Random', 'Real', 'Record', 'Red', 'Report'], status: 1 });

});

server.listen(port, function() {
  console.log('server listening on port ' + port);
});
