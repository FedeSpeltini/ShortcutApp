const express = require('express');
const router = express.Router({ mergeParams: true });
const app = express();


const urlController = require('../controllers/url.controller');

router.route('/')
    .get(urlController.getAll);


router.route('/shortUrls')
    .post(urlController.shortUrl);


router.route('/:shortUrl')
    .get(urlController.obtainFullUrl);


module.exports = router;