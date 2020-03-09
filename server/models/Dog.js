import mongoose from "db";

const { Schema } = mongoose;

const DogSchema = new Schema({
  name: String,
  age: Number
});

const DogModel = mongoose.model("Dogs", DogSchema, "dogs");

export default DogModel;
