import User from "../model/user.js";

export const mockAuth = async(req, res, next) => {
 const userId = req.header('x-user-id');
const user = await User.findById(userId);
if (!user) return res.status(401).send('Invalid user');
  req.user = user;
  next();
}

