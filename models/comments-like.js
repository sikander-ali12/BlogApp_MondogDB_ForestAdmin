const Mongoose = require('mongoose');

const schema = new Mongoose.Schema({
  comment_id: Number,
  user_id: Number,
}, {
  timestamps: false,
});

module.exports = {
  collectionName: 'comments_like',
  modelName: 'commentsLike',
  schema,
};
