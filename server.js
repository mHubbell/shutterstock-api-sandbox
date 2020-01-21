/**
 * This is the server side portion of our app.
 * It sets up a simple express application (https://expressjs.com/)
 * It also hooks into webpack in order to automatically restart the app
 * as files change so that you dont need to restart it manually
 * (you do need to refesh the browser however)
 */
// requires our private env params (api key and secret)
// and sets them for us as environemnt variables
require('./env.private');
// main dependencies for the application
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
// the shutterstock sdk (https://www.npmjs.com/package/shutterstock-api)
const sstk = require('shutterstock-api');
// local webpack configuration
const config = require('./webpack.config.js');

// create an express application (server)
const app = express();
// create a webpack compiler for packaging our front end javascript
const compiler = webpack(config);

// set up the shutterstock sdk with our key and secret
sstk.setBasicAuth(
  process.env.SSTK_KEY,
  process.env.SSTK_SECRET,
);
// create a client for talking to the `ImagesApi` (basic image searching and interactions)
const api = new sstk.ImagesApi();

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

// create a controller or "route" that will respond when we call our application
// at the `/search` url. This for now just hardcodes a search and returns
// its results.

app.get('/search', async (req, res) => {
  const query = req.query.query
  console.log('query',query);
  console.log('params',req.query);
  const queryParams = {
    query,
    sort: 'popular',
    orientation: 'horizontal',
  };
  const results = await api.searchImages(queryParams);
  res.json(results);
});

// Serve the application on port 3000.
app.listen(3000, () => {
  console.log('Example app listening on port 3000!\n'); // eslint-disable-line no-console
});
