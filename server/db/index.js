import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/Restorest",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(error=>console.error(error));

mongoose.connection.on("open",()=>console.log("> Mongo DB connected!"));

export default mongoose;
