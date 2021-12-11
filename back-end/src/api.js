var http, options, proxy, url;

http = require("http");

url = require("url");

proxy = url(process.env.QUOTAGUARDSTATIC_URL);
target  = url("mongodb+srv://reactauth:EdkJSf5zjiWw9Su@cluster0.a0egc.mongodb.net/react-auth-db?retryWrites=true&w=majority");

options = {
  hostname: proxy.hostname,
  port: proxy.port || 80,
  path: target.href,
  headers: {
    "Proxy-Authorization": "Basic " + (new Buffer(proxy.auth).toString("base64")),
    "Host" : target.hostname
  }
};

http.get(options, function(res) {
  res.pipe(process.stdout);
  return console.log("status code", res.statusCode);
});