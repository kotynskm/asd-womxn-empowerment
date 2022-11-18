const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  //add a expiration to the cookie
  const currDate = new Date()
  res.cookie('ssid', `${res.locals.doc._id}currDate`, {
    expires: new Date(Date.now() + 900000),
    httpOnly: true,
  });
  return next();
};

module.exports = cookieController;
