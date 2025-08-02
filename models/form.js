import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const formModel = mongoose.model('form', formSchema);
export default formModel;