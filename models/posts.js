const Mongoose = require('mongoose');

const schema = new Mongoose.Schema({
  user_id: Number,
  title: String,
  body: String,
  post_id: Number,
  status: String,
  date: String,
  time: String,
  likeCount: Number,
}, {
  timestamps: false,
});

module.exports = {
  collectionName: 'posts',
  modelName: 'posts',
  schema,
};
