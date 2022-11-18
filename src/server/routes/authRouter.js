const express = require('express');
const router = express.Router();
const userController = require ('../controllers/userController')
const cookieController = require('../controllers/cookieController');

//route to sign up -> userController to create a user -> then login
// router.post('/signup', userController.createUser)

//route to log in -> find and verify user pw --> create a session --> return session id and user info in the response
router.post('/',userController.verifyUser,cookieController.setCookie, (req, res) => {
  res.status(200).json(res.locals.doc)
})

//route to log out

module.exports = router;