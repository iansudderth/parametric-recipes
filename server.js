const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const _ = require('lodash');
const mongoose = require('mongoose');
const seedDB = require('./schema/seed');
const Recipe = require('./schema/Recipe');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const dburl = process.env.DATABASEURL || 'mongodb://localhost/recipe';
mongoose.connect(dburl);

if (_.includes(process.argv, '--seed')) {
  seedDB();
}

app.prepare().then(() => {
  const server = express();

  server.get('/recipe', (req, res) => {
    Recipe.find({}).select({ title: true }).then(response => {
      const mergedQuery = Object.assign({}, req.query, {
        recipeList: response,
      });
      app.render(req, res, '/recipe', mergedQuery);
    });
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(3000, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
