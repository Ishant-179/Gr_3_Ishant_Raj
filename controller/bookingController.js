import Booking from "../model/booking.js";
import Event from "../model/event.js";


export const createBooking = async(req, res) => {
  const event = await Event.findById(req.body.event);
  if (!event){
     return res.status(404).send('Event not found');
  }

  const bookingCount = await Booking.countDocuments({ event: event._id });
  if (bookingCount >= event.capacity){
     return res.status(400).send('Event is full');
  }

  try {
    const booking = new Booking({ user: req.user._id, event: event._id });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).send('Already booked');
  }

}


export const deleteBooking = async(req, res) => {
 try {
         const booking = await Booking.findById(req.params.id);
     if (!booking){
         return res.status(404).send('Booking not found');
     }
     if (booking.user.toString() !== req.user._id.toString()) {
  return res.status(403).send("Not authorized to cancel this booking");
}

     await booking.deleteOne();
     res.send('Booking cancelled');
 } catch (error) {
    return res.status(500).json({message: "server error"})
 }

}