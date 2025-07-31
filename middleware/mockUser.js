export const mockUser = (req, res, next) => {
  req.user = {
    _id: '64cfe2f4a1b2c3d4e5f67890',
    role: 'admin'
  };
  next();
};
