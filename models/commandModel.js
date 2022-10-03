import mongoose from "mongoose";

const commandModel = mongoose.Schema({
  Command: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
});

export const Command = mongoose.model("Command", commandModel);
