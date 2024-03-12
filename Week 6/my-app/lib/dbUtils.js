import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  role: String
});

mongoose.models = {};
export const UserModel = mongoose.model("users", userSchema);

export async function mongooseConnect() {
  if (mongoose.connections[0].readyState) {
    return true;
  }

  try {
    await mongoose.connect(`mongodb+srv://dhruvchawlaa:813025Shivi@senecaweb.8wykkt4.mongodb.net/web422-week6-api`);
    return true;
  } catch (err) {
    throw new Error(err);
  }
}
