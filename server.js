const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const _ = require('lodash');
const mongoose = require('mongoose');
const session = require('express-session');
const seedDB = require('./server-files/seeds/seed');
const bigSeedDB = require('./server-files/seeds/bigSeed');
const bluebird = require('bluebird');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);

const pageRenderRoutes = require('./server-files/routes/pageRenderRoutes');
const apiRoutes = require('./server-files/routes/apiRoutes');
const authRoutes = require('./server-files/routes/authRoutes');

const config = require('./server-files/config');

const app = next({ dev: config.dev });
const handle = app.getRequestHandler();

mongoose.Promise = bluebird;
mongoose.connect(config.dburl);
const db = mongoose.connection;

if (_.includes(process.argv, '--seed')) {
  seedDB();
}

if (_.includes(process.argv, '--big-seed')) {
  bigSeedDB();
}

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.use(cookieParser());
  server.use(
    session({
      secret: config.sessionSecret,
      saveUninitialized: true,
      resave: true,
      store: new MongoStore({ mongooseConnection: db }),
    })
  );

  // Page Render Routes

  server.get('/recipe', pageRenderRoutes.renderHomePage(app));

  // Recipe API Routes

  server.get('/recipe/index/:pageIndex', apiRoutes.pageRoute);

  server.post('/recipe/new', apiRoutes.newRecipe);

  server.get('/recipe/:id', apiRoutes.getRecipe);

  server.post('/recipe/update', apiRoutes.updateRecipe);

  server.delete('/recipe/delete/:id', apiRoutes.deleteRecipe);

  // Auth Routes

  server.post('/recipe/auth/login', authRoutes.login);

  server.post('/recipe/auth/logout', authRoutes.logout);

  // Redirects

  server.get('/', (req, res) => {
    res.redirect('/recipe');
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(config.port, err => {
    if (err) throw err;
    console.log('App Ready');
  });
});
