var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var crtlOther = require('../controllers/others');


/* Location pages */
router.get('/', ctrlLocations.homelist);
router.get('/locations', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

// Other page
router.get('/about', crtlOther.about);

module.exports = router;
