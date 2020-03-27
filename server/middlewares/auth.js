const authMiddleWare = (req, res, next) => {
  if (!req?.session?.active)
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect("/auth");
    }
};

export default authMiddleWare;
