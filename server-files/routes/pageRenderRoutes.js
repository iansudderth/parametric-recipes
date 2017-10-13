const config = require('../config');
const generatePages = require('../schema/generatePages');

function renderHomePage(app) {
  return (req, res) => {
    generatePages(0, config.pageSize, pages => {
      const mergedQuery = Object.assign({}, req.query, {
        recipeList: pages,
      });
      app.render(req, res, '/recipe', mergedQuery);
    });
  };
}

module.exports.renderHomePage = renderHomePage;
