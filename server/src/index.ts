import express from 'express';
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();
//Routes
const router = require("../routes/router");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

mongoose
  .connect(
    process.env.DATABASE,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(5000, ()=>{
        console.log(`server started, listening PORT ${process.env.PORT}`)
    });
  })
  .catch((err:Error) => {
    console.log(err);
  });