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
  edited: { type: Boolean, default: false },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Post', PostSchema);