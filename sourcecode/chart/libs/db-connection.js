const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27019', {useMongoClient: true});

mongoose.connection
  .once('open', () => console.info('connection established to the database'))
  .on('error', err => console.error(err));
