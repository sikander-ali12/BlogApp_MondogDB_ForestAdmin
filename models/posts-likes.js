const Mongoose = require('mongoose');

const schema = new Mongoose.Schema({
  post_id: Number,
  user_id: Number,
}, {
  timestamps: false,
});

module.exports = {
  collectionName: 'posts_likes',
  modelName: 'postsLikes',
  schema,
};
