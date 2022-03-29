/**************************
 * File Name: index.js
 * Purpose: Main file for QAP2 FSJS
 * Created Date: 04 Feb 2022
 * Author: Ashley Fillmore
 *
 **************************/

const http = require("http");
const route = require("./routes");

const server = http.createServer((req, res) => {
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      route.index(path, res);
      console.log("Index page has been served.");
      break;
    case "/province":
      path += "province.html";
      res.statusCode = 200;
      route.province(path, res);
      console.log("Province page has been served.");
      break;
    case "/town":
      path += "town.html";
      res.statusCode = 200;
      route.town(path, res);
      console.log("Town page has been served.");
      break;
    case "/weather":
      path += "weather.html";
      res.statusCode = 200;
      route.weather(path, res);
      console.log("Weather page has been served.");
      break;
    case "/family":
      path += "family.html";
      res.statusCode = 200;
      route.family(path, res);
      console.log("Family page has been served.");
      break;
    default:
      path += "fourofour.html";
      res.statusCode = 404;
      route.fourofour(req.url, path, res);
      console.log("404 page has been served.");
      break;
  }
});

server.listen(3000, "localhost", () => {
  console.log("Listening on port 3000");
});
