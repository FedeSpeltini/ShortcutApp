const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes/url.route');
const app = express()


mongoose.connect('mongodb://localhost/shortUrls', {
  useNewUrlParser: true, useUnifiedTopology: true
})
app.set('view engine', 'ejs')

app.set('views', './src/views');
app.use(routes);


app.listen(process.env.PORT || 5000);