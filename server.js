//server.js

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
var controllers = require('./controllers');
/**********
 * ROUTES *
 **********/
/*
 * HTML Endpoints
 */
app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
/*
 * JSON API Endpoints
 */
// app.get('/api', controllers.api.index);



// app.get('/api/albums', controllers.albums.index);
// app.get('/api/albums/:albumId', controllers.albums.show);
// app.post('/api/albums', controllers.albums.create);
// app.delete('/api/albums/:albumId', controllers.albums.destroy);
// app.put('/api/albums/:albumId', controllers.albums.update);
// app.post('/api/albums/:albumId/songs', controllers.albumsSongs.create);
// app.get('/api/albums', controllers.albums.index);
// app.get('/api/albums/:albumId', controllers.albums.show);
// app.post('/api/albums', controllers.albums.create);
// app.delete('/api/albums/:albumId', controllers.albums.destroy);
// app.post('/api/albums/:albumId/songs', controllers.albumsSongs.create);
// app.get('/api/albums', controllers.albums.index);
// app.get('/api/albums/:albumId', controllers.albums.show);
// app.post('/api/albums', controllers.albums.create);
// app.delete('/api/albums/:albumId', controllers.albums.destroy);
// app.put('/api/albums/:albumId', controllers.albums.update);
// app.get('/api/albums/:albumId/songs', controllers.albumsSongs.index);
// app.post('/api/albums/:albumId/songs', controllers.albumsSongs.create);
// app.delete('/api/albums/:albumId/songs/:songId', controllers.albumsSongs.destroy);
// app.put('/api/albums/:albumId/songs/:songId', controllers.albumsSongs.update);
/**********
 * SERVER *
 **********/
// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
