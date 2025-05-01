const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');


dotenv.config();

const DB = process.env.DATABASE_NAME

mongoose.connect(DB).then(() => console.log('connected successfully'))



const port = process.env.PORT || 8000;
app.listen(port, (err) => {
  if (err) return console.log('Error Starting the server '+ err);
  console.log(`App running on port ${port}...`);
});
