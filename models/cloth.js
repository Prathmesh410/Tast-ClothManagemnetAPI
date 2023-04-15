const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const clothSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 50,
  },
  description: {
    type: String,
    trim: true,
    required: true,
    maxlength: 500,
  },
  category: {
    type: ObjectId,
    ref: 'Category',
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  soldUnit: {
    type: Number,
    default: 0,
  },
  images: {
    type: [String],
    required: true,
    validate: {
      validator: (v) => Array.isArray(v) && v.length > 0,
      message: 'At least one image is required',
    },
  },
  price: {
    type: Number,
    required: true,
    maxlength: 32,
    trim: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Cloth', clothSchema);
