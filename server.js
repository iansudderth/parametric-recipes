const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const _ = require('lodash');
const mongoose = require('mongoose');
const session = require('express-session');
const seedDB = require('./schema/seed');
const Recipe = require('./schema/Recipe');
const RecipeAuth = require('./schema/RecipeAuth');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const port = process.env.PORT || 3000;
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
  server.use(bodyParser.json());
  server.use(
    session({
      secret: 'stuff and things',
      resave: false,
      saveUninitialized: false,
    })
  );

  server.use(passport.initialize());
  server.use(passport.session());
  passport.use(new LocalStrategy(RecipeAuth.authenticate()));

  server.get('/recipe', (req, res) => {
    Recipe.find({})
      .select({ title: true })
      .sort({ title: 'asc' })
      .then(response => {
        const mergedQuery = Object.assign({}, req.query, {
          recipeList: response,
        });
        app.render(req, res, '/recipe', mergedQuery);
      });
  });

  server.get('/recipe/new', (req, res) => {
    app.render(req, res, '/newRecipe', req.query);
  });

  server.post('/recipe/new', (req, res) => {
    const recipe = req.body.recipe;
    const password = req.body.password;
    recipe.password = password ? true : false;
    Recipe.create(recipe)
      .then(newRecipe => {
        if (password) {
          RecipeAuth.create({
            recipeId: newRecipe._id,
            password,
          })
            .then(newAuth => {
              console.log(newAuth);
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          res.json({
            recipeId: newRecipe._id,
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  });

  server.get('/recipe/index', (req, res) => {
    Recipe.find({})
      .select({ title: true })
      .sort({ title: 'asc' })
      .then(response => {
        res.json(response);
      });
  });

  server.get('/recipe/:id', (req, res) => {
    const id = req.params.id;
    Recipe.findOne({ _id: id }).then(response => {
      res.json(response);
    });
  });

  server.get('/', (req, res) => {
    res.redirect('/recipe');
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) throw err;
    console.log('Ready on http://localhost:3000');
  });
});
