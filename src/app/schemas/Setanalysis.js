const mongoose = require('mongoose');

const SetAnalysis = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    functionality: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('SetAnalysis', SetAnalysis);