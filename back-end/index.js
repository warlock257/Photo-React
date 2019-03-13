const express = require('express');
const multer = require('multer');
const path = require ('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors({
    origin:"http://localhost:3000"
}))
const fs = require('fs');
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('./public'));

//storage and how file is named
const storage = multer.diskStorage({
  destination:'./public/uploads/',
  filename: function (req,file,cb){
  cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
})

//upload variable
const upload = multer({
  storage:storage,
  limits:{
      fileSize:100000000,
      fileFilter:function(req,res,cb){
          checkFileType(file,cb)
      }
  }
}).single('myImage');


//check file type function
function checkFileType(file, cb){
  //allowed file types
  const fileTypes = /jpeg|jpg|png|gif|bmp|tif/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype)
  if(mimetype && extName){
      return cb(null, true);
  } else {
      cb('Error: images only')
  }
}

//file.originalfilename is the original file name
//file.filename is new file name
app.post('/upload',(req,res) =>{
  upload(req,res,(err) => {
      if(err){
        console.log(err)
        res.send(err)
      } else {
          console.log(req.file)
          if(req.file == undefined){
            console.log("no file selected")
            res.send("no file selected")
          } else {
            console.log("file uploaded as: " + req.file.filename)
            res.send("file uploaded as: " + req.file.filename)
          }
      }
  })
})



app.get('/getPics', (req,res) =>{
    let userFolder = 'tempImages'
    const testFolder = `./public/${userFolder}/`;

    let imgNumber = 0
    let arrayOfImages = [];
    let imgObject = {
      number:imgNumber,
      originalFilename:'',
      newFilename:'',
      category:'unsorted',
      imgLocalUrl:''
    }

    fs.readdir(testFolder, (err, files) => {
      files.forEach(file => {
        imgObject = {
          number:imgNumber,
          originalFilename:file,
          newFilename:'',
          category:'unsorted',
          imgLocalUrl:`http://localhost:8080/${userFolder}/${file}`
        }
        arrayOfImages.push(imgObject)
        imgNumber++
      });
      res.json(arrayOfImages);
    });  
})


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})