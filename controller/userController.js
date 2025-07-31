
import User from "../model/user.js";

export const createUser = async (req, res) => {
  const { name, role } = req.body;

  if (!name || !role) {
    return res.status(400).json({ message: "Name and role are required" });
  }

  try {
    const user = new User({ name, role });
    await user.save();
    res.status(201).json(user); 
  } catch (err) {
    res.status(500).json({ message: "Error creating user", error: err.message });
  }
};
