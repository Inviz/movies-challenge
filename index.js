var express = require('express');
var app = express();
var config = require('./config.json')
var request = require('request');



app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/:page?', function(req, res){
	if (req.query.query) {
		var url = 'https://api.themoviedb.org/3/search/movie/?api_key=' + config.key + '&query=' + req.query.query;
	} else {
		var url = 'https://api.themoviedb.org/3/movie/popular/?api_key=' + config.key;
	}
  if (req.params.page)
    url += '&page=' + req.params.page

  request(url, { json: true }, (err, result, body) => {
    if (err) { return console.log(err); }
    var p = parseInt(req.params.page);
    if (isNaN(p))
      p = 1;
  	res.render('index', { title: 'Movie db', db: body, query: req.query.query || '', page: p })
  });
});


app.get('/movies/:movie', function(req, res){
  request('https://api.themoviedb.org/3/movie/' + req.params.movie + '?api_key=' + config.key, { json: true }, (err, result, body) => {
    if (err) { return console.log(err); }
  	res.render('show', { title: 'Movie: ' + body.title, movie: body })
  });
});

app.listen(3000);