const db = require('../models/userModel')

const userController = {};

//find all users


//create user
userController.createUser = (req, res, next) => {
  const { name, email, password } = req.body;
  if (name == "" | email == "" | password == "") {
     return next(
      createErr({
        method: 'createUser',
        type: 'missing info',
        err: 'Missing Info',
      })
    );
  } else {
    db.create(req.body)
    .then((data)=>console.log(data));
  }
};

//verify user
userController.verifyUser = (req, res, next) => {
  console.log('in usercontroller verify user...req.body', req.body)
  const { name, password } = req.body;
  let doc;
  db
    .findOne({name: name})
    .then((data)=> {
      //returned data is the entire document
      doc = data;
      console.log('doc.....', doc)
      //check if passwords match
      //if do not match, send back error for wrong password
      //if match, create user session --- return next
      if (password !== doc.password) {
        return next({ err: 'passwords do not match' });
      } else {
        res.locals.doc = data;
        return next();
   } 
         
    })
    .catch((error) => {
      return next(
        'error in userController.verifyUser:' + JSON.stringify(error)
        );
      });
      


}


//update userpw


//delete user


module.exports = userController;