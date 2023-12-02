const Mongoose = require('mongoose');

const schema = new Mongoose.Schema({
  user_id: Number,
  name: String,
  email: String,
  pass: String,
}, {
  timestamps: false,
});

module.exports = {
  collectionName: 'moderators',
  modelName: 'moderators',
  schema,
};
