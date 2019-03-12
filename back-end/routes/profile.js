const express = require('express');
const router = express.Router();
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        //how the temp file is named
      cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
  })
   
  //imgName is the key, when posting
  var upload = multer({ storage: storage }).single('imgName')
 
  router.post('/', function (req, res) {
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        console.log(err)
      } else if (err) {
        // An unknown error occurred when uploading.
        console.log(err)
      }
      res.json({
          success:true,
          message:"Image Uploaded"
      })
   
      // Everything went fine.
    })
  })


  // router.post('/profile', upload.single('avatar'), function (req, res, next) {
  //   // req.file is the `avatar` file
  //   // req.body will hold the text fields, if there were any
  // })
   
  // router.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  //   // req.files is array of `photos` files
  //   // req.body will contain the text fields, if there were any
  // })
   
  // var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
  // router.post('/cool-profile', cpUpload, function (req, res, next) {
  //   // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
  //   //
  //   // e.g.
  //   //  req.files['avatar'][0] -> File
  //   //  req.files['gallery'] -> Array
  //   //
  //   // req.body will contain the text fields, if there were any
  // })





module.exports = router;