const Mongoose = require('mongoose');

const schema = new Mongoose.Schema({
  id: Number,
  user_id: Number,
  body: String,
  post_id: Number,
  date: String,
  time: String,
  comment_id: Number,
  likeCount: Number,
}, {
  timestamps: false,
});

module.exports = {
  collectionName: 'comments',
  modelName: 'comments',
  schema,
};
