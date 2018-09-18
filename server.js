const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const userController = require('./controllers/users');
const movieController = require('./controllers/movies');
const tvController = require('./controllers/tv');
const celebController = require('./controllers/celebs');
const photoController = require('./controllers/photos');
const showtimeController = require('./controllers/showtimes');
const episodeController = require('./controllers/episodes');

mongoose.connect('mongodb://localhost:27017/imdb');
mongoose.connection.on('error', (error) => console.error(error));
mongoose.connection.on('open', () => console.log("success in connecting to mongodb"));


const app = express(); app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extends: true,
}
));

app.get('/', function (req, res) {
    res.send("Hello world");
})

app.post('/api/v1/users', userController.postNewUser);
app.get('/api/v1/users', userController.getAllUsers);
app.get('/api/v1/users/:id', userController.getUserById);
app.put('/api/v1/users/:id', userController.updateUserById);
app.delete('/api/v1/users/:id', userController.deleteUserById);


app.post('/api/v1/movies', movieController.postNewMovie);
app.get('/api/v1/movies', movieController.getAllMovies);
app.get('/api/v1/movies/:id', movieController.getMovieById);
app.put('/api/v1/movies/:id', movieController.updateMovieById);
app.delete('/api/v1/movies/:id', movieController.deleteMovieById);


app.post('/api/v1/tv', tvController.postNewTv);
app.get('/api/v1/tv', tvController.getAllTv);
app.get('/api/v1/tv/:id', tvController.getTvById);
app.put('/api/v1/tv/:id', tvController.updateTvById);
app.delete('/api/v1/tv/:id', tvController.deleteTvById);

app.post('/api/v1/celebs', celebController.postNewCeleb);
app.get('/api/v1/celebs', celebController.getAllCelebs);
app.get('/api/v1/celebs/:id', celebController.getCelebById);
app.put('/api/v1/celebs/:id', celebController.updateCelebById);
app.delete('/api/v1/celebs/:id', celebController.deleteCelebById);


app.post('/api/v1/photos', photoController.postNewPhoto);
app.get('/api/v1/photos', photoController.getAllPhotos);
app.get('/api/v1/photos/:id', photoController.getPhotoById);
app.put('/api/v1/photos/:id', photoController.updatePhotoById);
app.delete('/api/v1/photos/:id', photoController.deletePhotoById);

app.post('/api/v1/showtimes', showtimeController.postNewShowtime);
app.get('/api/v1/showtimes', showtimeController.getAllShowtimes);
app.get('/api/v1/showtimes/:id', showtimeController.getShowtimeById);
app.put('/api/v1/showtimes/:id', showtimeController.updateShowtimeById);
app.delete('/api/v1/showtimes/:id', showtimeController.deleteShowtimeById);

app.post('/api/v1/episodes', episodeController.postNewEpisode);
app.get('/api/v1/episodes', episodeController.getAllEpisodes);
app.get('/api/v1/episodes/:id', episodeController.getEpisodeById);
app.put('/api/v1/episodes/:id', episodeController.updateEpisodeById);
app.delete('/api/v1/episodes/:id', episodeController.deleteEpisodeById);

app.set('port', 5000);
app.listen(app.get('port'), function () {
    console.log('the server is working');
});