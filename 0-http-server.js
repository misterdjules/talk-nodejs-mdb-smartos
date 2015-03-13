// After starting the server, use the following dtrace command:
// dtrace -w -n 'node::http-server-response { stop(); system("gcore %d", pid); system("prun %d", pid); exit(0); }'
// and send a request to the server using:
// curl http://127.0.0.1:4242/
//
// Now, use mdb to load the newly created core file.
var http = require('http');

function sendResponse(res) {
  res.end('Hello world!');
}

var server = http.createServer(function(req, res) {
  sendResponse(res);  
}).listen(4242, function onListen() {
  console.log('Listening on %s:%s',
	      server.address().address,
	      server.address().port);
});
