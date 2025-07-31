import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
          name: 
          {
            type: String,
            required: true
        },
  role:{ 
    type: String, 
    enum: ['student', 'admin'],
     required: true
     }
    }
)

const User = mongoose.model("User", userSchema);

export default User;