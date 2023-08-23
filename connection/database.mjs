import mongoose from "mongoose";

export const connect = async (name,password) => {
  try {
    await mongoose.connect(`mongodb+srv://${name}:${password}@learnmongo.6pho3we.mongodb.net/`);
    console.log("Connected to Database Successfully");
  } catch (e) {
    console.log(e.message);
  }
};
