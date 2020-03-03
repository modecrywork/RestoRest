import mongoose from "db";
import { composeWithMongoose } from 'graphql-compose-mongoose';

const {Schema} = mongoose;

const DogSchema = new Schema({
    name:String,
    age:Number
})

const Dog = mongoose.model("Dogs",DogSchema, "dogs");
const DogTC = composeWithMongoose(Dog, {});

export default DogTC;
