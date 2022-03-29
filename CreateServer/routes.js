//

const fs = require("fs");

// define/extend an EventEmitter class
const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
// initialize a new emitter object
const myEmitter = new MyEmitter();

//

//An event for each time a file is successfully read, with a message to the console

myEmitter.on("route", (route, level, msg) => {
  const d = new Date();
  if (level === "error")
    console.log(
      d.toLocaleString() +
        " * " +
        level.toUpperCase() +
        " * the " +
        route +
        " " +
        msg
    );
  else
    console.log(
      d.toLocaleString() +
        " * " +
        level.toUpperCase() +
        " * " +
        route +
        ".html" +
        msg
    );
});

function index(path, res) {
  myEmitter.emit("route", "index", "info", " file was successfully read.");
  fetchFile(path, res);
}

function province(path, res) {
  myEmitter.emit("route", "province", "info", " file was successfully read.");
  fetchFile(path, res);
}

function town(path, res) {
  myEmitter.emit("route", "town", "info", " file was successfully read.");
  fetchFile(path, res);
}

function family(path, res) {
  myEmitter.emit("route", "family", "info", " file was successfully read.");
  fetchFile(path, res);
}

function weather(path, res) {
  myEmitter.emit("route", "weather", "info", " file was successfully read.");
  fetchFile(path, res);
}

function fourofour(url, path, res) {
  myEmitter.emit("route", url, "error", " file was not found.");
  fetchFile(path, res);
}

function fetchFile(path, res) {
  fs.readFile(path, function (err, data) {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.writeHead(res.statusCode, {
        "Content-Type": "text/html",
      });
      res.end(data);
    }
  });
}

module.exports = {
  index,
  province,
  town,
  family,
  weather,
  fourofour,
};
