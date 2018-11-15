// eslint-disable-next-line no-unused-vars
const morgan = require('morgan');
module.exports = function (app) {
  // Add your custom middleware here. Remember that
  // in Express, the order matters.
  app.use(morgan('dev'));
};
