import mongoose from "mongoose";

const userModel = mongoose.Schema({
  Username: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model('User', userModel);