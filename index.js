import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors"
import eventRoutes from "./routes/eventRoutes.js"
import bookingRoutes from "./routes/bookingRoutes.js"
import { mockAuth } from "./middleware/auth.js";
import userRoutes from "./routes/userRoutes.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();

app.use(express.json());

app.use("/api/user", userRoutes)


app.use(mockAuth);

app.use("/api/event", eventRoutes)
app.use("/api/booking", bookingRoutes)



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})