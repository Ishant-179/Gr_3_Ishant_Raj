import express from "express";
import { createBooking, deleteBooking } from "../controller/bookingController.js";


const router = express.Router();


router.post("/", createBooking);

router.delete("/:id", deleteBooking);


export default router