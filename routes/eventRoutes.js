import express from "express";
import { createEvents, updateEventBooking, updateEvents } from "../controller/eventController.js";
import { mockUser } from "../middleware/mockUser.js";


const router = express.Router();


router.post("/", mockUser, createEvents);


router.put("/:id", mockUser, updateEvents);


router.get('/:id/bookings', updateEventBooking)

export default router;
