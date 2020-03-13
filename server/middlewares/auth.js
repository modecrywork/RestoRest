const authMiddleWare = (req, res, next) => {
  if (!req.session.active)
    if (req.isAuthenticated()) {
      // req.isAuthenticated() will return true if user is logged in
      next();
    } else {
      res.redirect("/auth");
    }
};

export default authMiddleWare;
