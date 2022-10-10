export const authenticateRoute = (req, res, next) => {
  if (req.isAuthenticated) {
    next();
  } else {
    res.render("html/login", {
      err: "You need to login first",
    });
  }
};
