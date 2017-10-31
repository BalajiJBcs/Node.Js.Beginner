# Node.Js server
This will guide you in head start with your first Node.js server and serving the http request

``` var http = require("http")  ```
> used to load the required http model.

``` http.createServer(function (request, response)  ```
>Function to createServer which handles request and response.

``` response.writeHead(200, {'Content-Type': 'text/plain'}) ```
> standardization and content type which is just a plain text hello world.

``` response.end('Hello World\n')  ```
> response given to when server accessed.

Source Code : /sourcecode/server/
