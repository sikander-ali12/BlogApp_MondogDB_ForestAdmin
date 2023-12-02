const Mongoose = require('mongoose');

const schema = new Mongoose.Schema({
  comment_id: Number,
  reason: String,
}, {
  timestamps: false,
});

module.exports = {
  collectionName: 'commentsreports',
  modelName: 'commentsreports',
  schema,
};
