import Event from "../model/event.js";
import Booking from "../model/booking.js";


export const createEvents = async(req, res) => {

    try {

        if (!req.user) {
      req.user = {
        _id: '64cfe2f4a1b2c3d4e5f67890', 
        role: 'admin'
      };
    }
    const event = new Event({ ...req.body, createdBy: req.user._id });
    await event.save();
   res.status(201).json(event);


    } catch (error) {
        return res.status(500).json({message: "server error"});
    }
}

export const updateEvents = async(req, res) => {
    if (req.user.role !== 'admin')
     { 
        return res.status(403).send('Forbidden');
     }

    try {
         const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!event) 
    {
        return res.status(404).send('Event not found');
    }
  res.json(event);
        
    } catch (error) {
        return res.status(500).json({message: "server error"});
    }
}


export const updateEventBooking =  async(req, res) => {
  if (req.user.role !== 'admin') 
  {
    return res.status(403).send('Forbidden');
  }

 try {
     const bookings = await Booking.find({ event: req.params.id }).populate('user', 'name');
     res.json(bookings);
 } catch (error) {
    return res.status(500).json({message: "server error"})
 }
};


