const isAdminMiddleware = (req, res, next) => {
  if (req.session?.user && req.session.user.role === 2) {
    next();
  } else {
    return res.status(501).json({ message: "UNAUTHORIZED" });
  }
};

export default isAdminMiddleware;
