const Mongoose = require('mongoose');

const schema = new Mongoose.Schema({
  post_id: Number,
  reason: String,
}, {
  timestamps: false,
});

module.exports = {
  collectionName: 'postreports',
  modelName: 'postreports',
  schema,
};
