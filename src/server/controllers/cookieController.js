const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  const currDate = new Date()

  //consider changing this logic for db security in the future
  res.cookie('ssid', `${res.locals.doc._id}currDate`, {
    //add a expiration to the cookie
    expires: new Date(Date.now() + 900000),
    httpOnly: true,
  });
  return next();
};

module.exports = cookieController;
