import mongoose from "mongoose";

const mongooseDB = () => {
    try {
      let connectDB = mongoose.connect(process.env.MONGOURL);
      console.log(`Mongodb is successfully connected ${connectDB}`);

    }catch(error){
      console.log("some error during connection of mongoDB");
    }
    
}

export default mongooseDB;

