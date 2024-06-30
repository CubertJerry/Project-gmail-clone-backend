const mongoose = require('mongoose');

const EmailSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
  },
  recipient: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['inbox', 'sent', 'draft', 'trash'],
    default: 'inbox',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Email', EmailSchema);