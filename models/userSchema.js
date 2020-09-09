const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { encrypt, compare } = require('../lib/encryption');
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  role: { type: String, enum: ['Admin', 'User'], default: 'User' },
  tokens: [{ token: { type: String, require: true }}]
},
{
  toObject: { virtuals: true }
});

// Create fullName virtual
UserSchema.virtual('fullName').get(() => {
  return `${this.firstName} ${this.lastName}`;
})

// Enctypt password before saving
UserSchema.pre('save', async function(next) {
  this.password = await encrypt(this.password);
});

// Verify password
UserSchema.methods.checkPassword = async function(password) {
  return await compare(password, this.password);
};

// Public fields
UserSchema.methods.getPublicFields = function() {
  const publicFields = {
    id: this._id,
    firstName: this.firstName,
    lastName: this.lastName,
    fullName: this.fullName,
    role: this.role,
    email: this.email,
  };
  return publicFields;
};

// Generate token
UserSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_KEY);
  this.tokens.push({ token });
  return token;
}

module.exports = mongoose.model('User', UserSchema);