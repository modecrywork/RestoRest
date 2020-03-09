import mongoose from "db";

const { Schema } = mongoose;

const CatSchema = new Schema({
  name: String,
  age: Number
});

const CatModel = mongoose.model("Cat", CatSchema, "cats");

export default CatModel;
