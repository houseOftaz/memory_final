const isAdminMiddleware = (req, res, next) => {
  if (req.session?.user && req.session.user.role === 2) {
    next();
  } else {
    return res.status(401).json({ message: "FORBIDDEN" });
  }
};

export default isAdminMiddleware;
