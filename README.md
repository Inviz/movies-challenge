# Movie database challenge

This is my submission for test challenge to implement basic crud UI that fetches data from themoviedb in under one hour.

I recorded a video doing this challenge and put it on youtube: https://youtu.be/k097aLuhGgw


## Why express.js?

1) It's simplier. I will not need to build a separate clientside application.
2) It's secure. The app will not leak the api key to the public
3) Indexable by search engines out of the box.
4) Easy to run
5) Progressivevly enhanced. Will work without javascript.

## Features
### Requirements

1) List popular movies
2) Search movies by keywords
3) Browse movie details
4) Pagination
5) Api key not in git

### Extra points
1) Handle empty results
2) Handle case with missing image
3) Two and one column layouts, downsize for portait view
4) Search-as-you-type

## Installation

1) Create `config.json` and put `{"key": "YOUR-API-KEY-HERE"}` content there. 
2) `npm install`
3) `node index.js`
4) navigate to `http://localhost:3000`

