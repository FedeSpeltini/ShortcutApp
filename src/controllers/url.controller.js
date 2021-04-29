const ShortUrl = require('../models/shortUrl');

const getAll =async function(req, res){
    const shortUrls = await ShortUrl.find()
    res.render('index', { shortUrls: shortUrls });
}

const shortUrl =async function(req, res){
    console.log(req);
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