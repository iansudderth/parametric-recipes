const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const _ = require('lodash');
const mongoose = require('mongoose');
const session = require('express-session');
const seedDB = require('./schema/seed');
const Recipe = require('./schema/Recipe');
const RecipeAuth = require('./schema/RecipeAuth');
const bluebird = require('bluebird');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

mongoose.Promise = bluebird;
const dburl = process.env.DATABASEURL || 'mongodb://localhost/recipe';
mongoose.connect(dburl);
const db = mongoose.connection;

const secret = process.env.SESSION_SECRET || 'stuff and things';
const saltingRounds = process.env.SALTING_ROUNDS || 8;

if (_.includes(process.argv, '--seed')) {
  seedDB();
}

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.use(cookieParser());
  server.use(
    session({
      secret,
      saveUninitialized: true,
      resave: true,
      store: new MongoStore({ mongooseConnection: db }),
    })
  );

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
          bcrypt
            .hash(password, saltingRounds)
            .then(hash => {
              const auth = new RecipeAuth();
              auth.recipeId = newRecipe._id;
              auth.hash = hash;
              return auth.save();
            })
            .then(auth => {
              res.json({
                status: 'SUCCESS',
                recipeStatus: 'RECIPE CREATED SUCCESSFULLY',
                authStatus: 'RECIPE AUTH CREATED SUCCESSFULLY',
                recipeId: newRecipe._id,
              });
            })
            .catch(error => {
              console.log(error);
              res.json({
                status: 'ERROR',
                recipeStatus: 'RECIPE CREATED SUCCESSFULLY',
                authStatus: 'ERROR IN CREATING AUTH',
              });
            });
        } else {
          res.json({
            status: 'SUCCESS',
            recipeStatus: 'RECIPE CREATED SUCCESSFULLY',
            recipeId: newRecipe._id,
          });
        }
      })
      .catch(error => {
        res.json({
          status: 'ERROR',
          recipeStatus: 'ERROR IN CREATING RECIPE',
        });
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

  server.post('/recipe/auth/login', (req, res) => {
    const recipeId = req.body.id;
    const password = req.body.password;
    console.log(recipeId, password);
    RecipeAuth.findOne({ recipeId })
      .then(auth => {
        if (auth) {
          bcrypt.compare(password, auth.hash).then(passwordIsCorrect => {
            if (passwordIsCorrect) {
              req.session.recipeId = recipeId;
              res.json({
                status: 'SUCCESS',
                authStatus: 'CORRECT PASSWORD',
              });
            } else {
              res.json({
                status: 'ERROR',
                authStatus: 'INCORRECT PASSWORD',
              });
            }
          });
        } else {
          res.json({
            status: 'ERROR',
            authStatus: 'NO AUTH RECORD',
          });
        }
      })
      .catch(error => {
        res.json({
          status: 'ERROR',
          recipeStatus: 'ERROR FINDING AUTH RECORD',
        });
      });
  });

  server.post('/recipe/auth/logout', (req, res) => {
    req.session.destroy(error => {
      if (error) {
        console.log(error);
        res.json({
          status: 'ERROR',
          authStatus: 'LOGOUT FAILED',
        });
      } else {
        res.json({
          status: 'SUCCESS',
          authStatus: 'LOGOUT SUCCESS',
        });
      }
    });
  });

  server.post('/recipe/update', (req, res) => {
    const recipeId = req.body.recipeId;
    const recipe = req.body.recipe;
    if (req.session.recipeId === recipeId) {
      Recipe.findByIdAndUpdate(recipeId, recipe)
        .then(updatedRecipe => {
          if (!updatedRecipe) {
            res.json({
              status: 'ERROR',
              recipeStatus: 'RECIPE NOT FOUND',
            });
          } else {
            res.json({
              status: 'SUCCESS',
              recipeStatus: 'RECIPE UPDATED SUCCESSFULLY',
            });
          }
        })
        .catch(error => {
          console.log(error);
          res.json({
            status: 'ERROR',
            recipeStatus: 'ERROR IN RECIPE UPDATE',
          });
        });
    } else {
      res.json({
        status: 'ERROR',
        authStatus: 'NOT LOGGED IN',
      });
    }
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
