# Node.js post mortem debugging on SmartOS

* Introduction to Node.js
* Post mortem debugging.
* mdb, a tool for debugging Node.js applications post mortem.

# Node.js

Platform built on top of Chrome's JavaScript runtime for easily building fast,
scalable network applications.

```
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(4242, '127.0.0.1');
```
 
# Node.js applications bugs

* Unexpected/bogus behavior.
* Crashes.
* Performance issues.
* Memory leaks.

# Live debugging

* Source level debugging allows to easily navigate source, set breakpoints, etc.
* Requires the application to be running.
* High performance cost.

Great for debugging unexpected behavior.

# Postmortem debugging

OS dumps core file and special debugger loads it to examine process' memory.

* Application can restart right away, downtime is minimal.
* No performance overhead, takes only a few seconds to generate the core file.
* Debugging can be done by more than one programmer, on different machines.
* Used by a lot of native applications (video games, Windows applications. etc.)

Great for debugging crashes, memory leaks and 100% cpu issues in production.

# Node.js internals

* What makes post-mortem debugging of Node.js applications special?
* JavaScript code compiled into binary code "Just In Time".
* A mix of JIT compiled JavaScript and native code.

# Demo of mdb on SmartOS

* --abort-on-uncaught-exception.
* Every type of information is available: native and JS.
* Every object, native or JS, can be inspected.
* Heuristics.

# The workshop

# Other related tools

* lldb-v8.
* Dtrace: node-dtrace-provider, flamegraphs.
* IBM IDDE.

# Learn more

* https://www.joyent.com/developers/node/debug/mdb.
* https://github.com/joyent/node-debug-school.
* @misterdjules @tjfontaine @mrbruning.



