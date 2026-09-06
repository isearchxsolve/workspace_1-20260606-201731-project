// Database configuration
const db = require('mongoose');
db.connect('mongodb://localhost/tsp', { useNewUrlParser: true, useUnifiedTopology: true });
const dbModel = db.model('Tour', {
  tour: Array
});
module.exports = dbModel;
