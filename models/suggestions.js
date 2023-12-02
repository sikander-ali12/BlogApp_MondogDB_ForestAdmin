const Mongoose = require('mongoose');

const schema = new Mongoose.Schema({
  user_id: Number,
  post_id: Number,
  body: String,
  from: Number,
  to: Number,
  status: String,
  sug_id: Number,
}, {
  timestamps: false,
});

module.exports = {
  collectionName: 'suggestions',
  modelName: 'suggestions',
  schema,
};
