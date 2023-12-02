const Mongoose = require('mongoose');

const schema = new Mongoose.Schema({
  user_id: Number,
  name: String,
  email: String,
  password: String,
  pass: String,
}, {
  timestamps: false,
});

module.exports = {
  collectionName: 'users',
  modelName: 'users',
  schema,
};
