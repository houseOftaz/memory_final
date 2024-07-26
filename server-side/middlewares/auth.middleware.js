const isAuthMiddleware = (req, res, next) => {
  const protectedRoutes = ["/auth/update", "/auth/delete"];
  const path = req.path;
  if (
    protectedRoutes.some((route) => path.includes(route)) &&
    !req.session.isLogged
  ) {
    return res.redirect("/");
  }
  next();
};

export default isAuthMiddleware;
