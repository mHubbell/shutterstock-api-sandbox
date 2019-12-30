// requires our private env params (api key and secret) and sets them for us
require('./env.private');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const sstk = require('shutterstock-api');
const config = require('./webpack.config.js');

const app = express();
const compiler = webpack(config);

sstk.setBasicAuth(
  process.env.SSTK_KEY,
  process.env.SSTK_SECRET,
);
const api = new sstk.ImagesApi();

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.get('/search', async (req, res) => {
  const queryParams = {
    query: 'New York',
    sort: 'popular',
    orientation: 'horizontal',
  };
  const results = await api.searchImages(queryParams);
  res.json(results);
});

// Serve the files on port 3000.
app.listen(3000, () => {
  console.log('Example app listening on port 3000!\n');
});
