const Celeb = require('../models/celebs');

exports.postNewCeleb = (req, res) => {
  let {
    name,
    pic,
    dob,
    height,
    bio,
    trivia,
    createdAt,
    modifiedAt
  } = req.body;

  var celeb = new Celeb({
    name,
    pic,
    dob,
    height,
    bio,
    trivia,
    createdAt,
    modifiedAt
  });
  celeb.save().then((celeb) => {
    console.log('Added successfully');
    res.json(celeb);
  })
};

exports.getAllCelebs = (req, res) => {
  Celeb.find({}, (error, celebs) => {
    if (error) {
      res.json({
        message: "Server error, Please try after some time.",
      });
    }
    if (celebs) {
      res.json({
        data: celebs,
        message: "All celebs fetched",
      });
    } else {
      res.json({
        message: "No data found",
      });
    }
  });
};

exports.getCelebById = (req, res) => {
  Celeb.findById(req.params.id, (err, celebs) => {
    if (err) {
      res.json({
        message: "Server error, Please try after some time.",
     
      });
    }
    if (celebs) {
      res.json({
        data: celebs,
        message: "Celeb data fetched successfully",
   
      });
    } else {
      res.json({
        message: "No data found",
      });
    }
  });
};
