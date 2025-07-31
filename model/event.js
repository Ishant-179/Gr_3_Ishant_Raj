import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
     title: String,
  description: String,
  time: Date,
  capacity: Number,
       createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }


})

const Event = mongoose.model("Event", eventSchema);

export default Event;