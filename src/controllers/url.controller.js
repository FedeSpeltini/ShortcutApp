const urlService = require('../services/url.service');
const express = require('express');
const app = express();
const ShortUrl = require('../models/shortUrl');

app.set('views', '../views');
app.set('view engine', 'ejs');

const getAll =async function(req, res){
    const shortUrls = await ShortUrl.find()
    res.render('index', { shortUrls: shortUrls });
}

const shortUrl =async function(req, res){
    await ShortUrl.create({ full: req.body.fullUrl })
    res.redirect('/');
}


const obtainFullUrl =async function(req, res){
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl == null) return res.sendStatus(404)
  
    shortUrl.clicks++
    shortUrl.save()
  
    res.redirect(shortUrl.full)
}



module.exports = {
    getAll,
    shortUrl,
    obtainFullUrl
};