const express = require('express');
const bodyparser = require('body-parser');
const morgan = require("morgan");
const app = express();
require('dotenv').config();
require('./helpers/init_mogodb')

const port = process.env.PORT || 3000;
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/fonts', express.static(__dirname + 'public/fonts'))

// Set Views

app.use(bodyparser.urlencoded({extended: true}));




if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}



app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});
app.use('/', require('./app'))
app.use('/api/v.1/auth', require('./routes/auth'))
app.use('/api/v.1/contact', require('./routes/contact'))


app.listen(port, () => {
  console.log("lisenig port", port);
});
