// to access env variables
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const path=require('path');

// to connect to the DB
const mongoose = require('mongoose');
// save connection string to variable and replace password with one in env variables
// const DB = process.env.DATABASE.replace('<password>', process.env.PASSWORD);


// use mongoose connect to connect to the DB
// mongoose
//   .connect(DB)
//   .then(() => {
//     console.log('Connected to DB');
//   })
//   .catch((err) => console.log(err));

const app = require('./app');
const port = 3000;

// initial testing route
app.get('/', (req, res) => {
  console.log('get homepage');
  res.type('HTML').sendFile(path.resolve(__dirname, './client/index.html'));
});
// });

// listen to port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});