var express = require('express'),
  app = express(),
  http = require('http'),
  httpServer = http.Server(app),
  path = require('path');
var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads'); // set the destination
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + path.extname(file.originalname)); // set the file name and extension
  }
});
var upload = multer({ storage: storage });
app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.send("/richowebsites");
});
app.post("/upload", upload.single('imagename'), function (req, res) {
  res.send(req.file.filename);
})
app.get('/richowebsite', function (req, res) {
  res.sendfile(__dirname + '/myricoh.html');
});

app.get('/chat', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.listen(3000);