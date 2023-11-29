import mongoose from "mongoose";

export const connect = async (name, password) =>
  mongoose.connect(
    `mongodb+srv://${name}:${password}@learnmongo.6pho3we.mongodb.net/`
  );

