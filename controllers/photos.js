const Photo = require('../models/photos');

exports.postNewPhoto = (req, res) => {
  let {
    photourl,
    actor,
    movie,
    createdAt,
    modifiedAt
  } = req.body;

  var pic = new Photo({
    photourl,
    actor,
    movie,
    createdAt,
    modifiedAt
  });
  pic.save().then((pic) => {
    console.log('Added successfully');
    res.json({
      message: "Added successfully",
      status: 200
    });
  }).catch(function (err) {
    if (err) {
      console.log(err);
      res.json({
        message: 'Server error',
        status: 500
      });
    }
  });
};


exports.getAllPhotos = (req, res) => {
  Shot.find({}, (error, photos) => {
    if (error) {
      res.json({
        message: "Server error, Please try after some time.",
        status: 500
      });
    }
    if (photos) {
      res.json({
        data: shots,
        message: "All photos fetched",
        status: 200
      });
    } else {
      res.json({
        message: "No data found",
        status: 200
      });
    }
  });
};

exports.getPhotoById = (req, res) => {
  Shot.findById(req.params.id, (err, photos) => {
    if (err) {
      res.json({
        message: "Server error, Please try after some time.",
        status: 500
      });
    }
    if (photos) {
      res.json({
        data: shots,
        message: "Shot data fetched successfully",
        status: 200
      });
    } else {
      res.json({
        message: "No data found",
        status: 200
      });
    }
  });
};

exports.updatePhotoById = (req, res) => {
  console.log(req.body);
  const {
    photourl,
    actor,
    movie
  } = req.body;
  Photo.update({
    _id: req.params.id
  }, {
    photourl,
    actor,
    movie
  }, {}, (error, photo) => {
    if (error)
      res.json({
        error: error,
        status: 500
      });
    console.log(error);
    res.json(photo);
  });
};

exports.deletePhotoById  = (req, res) => {
  User.findOneAndDelete({
    _id: req.params.id
  }, (error, deleteId) => {
    if (error)
      res.json({
        error: error,
        status: 500
      });
    res.json({
      message: "Deleted successfully"
    });
  });
};