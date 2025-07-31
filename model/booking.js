import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
     event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
 bookedAt: { type: Date, default: Date.now }

})

bookingSchema.index({ user: 1, event: 1 }, { unique: true });

const Booking = mongoose.model("Booking", bookingSchema)

export default Booking;