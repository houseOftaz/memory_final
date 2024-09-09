const isAuthMiddleware = (req, res, next) => {
  const protectedRoutes = [
    "/auth/update",
    "/auth/delete",
    "/server-side/admin/admin",
  ];
  const path = req.path;
  if (
    protectedRoutes.some((route) => path.includes(route)) &&
    !req.session?.user?.email
  ) {
    return res.redirect("/");
  }
  next();
};

export default isAuthMiddleware;
