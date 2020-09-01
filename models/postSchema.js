const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  author: {
    id: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true}
  },
  date: { type: Date, default: Date.now },
  content: { type: String, required: true },
  likes: { type: Number }
});

module.exports = mongoose.model('Post', PostSchema);