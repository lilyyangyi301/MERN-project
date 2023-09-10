import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

// Create Schema

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default Item = model('item', ItemSchema)