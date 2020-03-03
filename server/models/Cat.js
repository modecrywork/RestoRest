import mongoose from "db";
import { composeWithMongoose } from 'graphql-compose-mongoose';

const {Schema} = mongoose;

const CatSchema = new Schema({
    name:String,
    age:Number
})

const Cat = mongoose.model("Cat",CatSchema, "cats");
const CatTC = composeWithMongoose(Cat, {});

export default CatTC;
