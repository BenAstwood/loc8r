// GET home page

module.exports.homelist = function(req, res){
  res.render('locations-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you'
    },
    locations: [{
      name: 'Starcups',
      address: '125 High Street',
      rating: 3,
      facilities: ['Hot Drinks', 'Food', 'Premium wifi'],
      distance: '100m'
      },
      {
      name: 'Cafe Hero',
      address: '100 High Street',
      rating: 5,
      facilities: ['Hot Drinks', 'Premium wifi'],
      distance: '500m'
    },
     {
      name: 'Burger Co.',
      address: '100 High Street',
      rating: 2,
      facilities: ['Food', 'Premium wifi'],
      distance: '200m'
    }]
  });
};

module.exports.locationInfo = function(req, res){
    res.render('location-info',
    {
      title: 'Starcups',
      pageHeader: {title: 'Starcups'},
      sidebar: {
        context: 'This cafe has good wifi',
        callToAction: 'Please leave a review of the cafe'
      },
      location: {
        name: 'Starcups',
        address: '125 High Street',
        rating: 3,
        facilities: ['Hot Drinks', 'Food', 'Premium wifi'],
        coords: {lat: 51.455041, lng: -0.9690884},
        openingTimes: [{
          days: 'Monday - Friday',
          opening:'7:00am',
          closing:'7:00pm',
          closed: false
        },{
          days: 'Saturday',
          opening:'8:00am',
          closing:'5:00pm',
          closed: false
        },
        {
          days: 'Sunday',
          closed: true
        }],
        review: [{
          author: 'Joe Bloggs',
          rating: 5,
          timestamp: '16 July 2015',
          reviewText: 'What a great place. I can\'t say enough good things about it.'
        }, {
          author: 'Ben Astwood',
          rating: 3,
          timestamp: '15 June 2016',
          reviewText: 'It was ok'
        }],

      }
  });
};

module.exports.addReview = function(req, res){
  res.render('location-review-form', {title: 'Review Starcups'});
};
