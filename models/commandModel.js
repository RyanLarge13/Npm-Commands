import mongoose from "mongoose";

const commandModel = mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  strictQuery: false, 
});

export const Command = mongoose.model("Command", commandModel);
