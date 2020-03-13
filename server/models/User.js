import mongoose from "db";

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: String,
  salt: String,
  hash: String
});

const UserModel = mongoose.model("User", UserSchema, "users");

export default UserModel;
