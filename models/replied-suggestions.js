const Mongoose = require('mongoose');

const schema = new Mongoose.Schema({
  body: String,
  from: Number,
  to: Number,
  realsug_id: Number,
}, {
  timestamps: false,
});

module.exports = {
  collectionName: 'replied_suggestions',
  modelName: 'repliedSuggestions',
  schema,
};
