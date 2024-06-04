const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/');
const version = "v1"
const db = require('./db/database');
const cors = require("cors");
 
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`/api/${version}`, router);



db.sync().then(() => {
    console.log('DBConnect est synchronisé')
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })