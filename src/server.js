const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes/url.route');
const app = express()
//usr: meli_user

//pwd: meliPwd
//const db = "mongodb://localhost/shortUrls";
const db = "mongodb+srv://meli_user:meliPwd@cluster0.7gl58.mongodb.net/shortUrls?retryWrites=true&w=majority";
mongoose.connect(db, {
  useNewUrlParser: true, useUnifiedTopology: true
})
app.set('view engine', 'ejs')

app.set('views', './src/views');
app.use(express.urlencoded({ extended: false }))
app.use(routes);


app.listen(process.env.PORT || 5000);