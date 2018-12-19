// middleware for restricting routes if not logged in
module.exports = function(req, res, next) {
// If logged in, continue with the request
  if (req.user) {
    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  return res.redirect("/");
};
