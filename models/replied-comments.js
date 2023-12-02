const Mongoose = require('mongoose');

const schema = new Mongoose.Schema({
  body: String,
  user_id: Number,
  realcomment_id: Number,
}, {
  timestamps: false,
});

module.exports = {
  collectionName: 'replied_comments',
  modelName: 'repliedComments',
  schema,
};
