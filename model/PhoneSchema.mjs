import mongoose from "mongoose";

const phoneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: { type: String, required: true },
  description: {
    type: String,
    required: true, 
  },
  available: {
    type: Boolean, 
  }, 
});
export const phone = mongoose.model("myphone", phoneSchema);
