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
var mv = require('mv');
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('./public'));

let userName='';
let defaultPath='./public/uploads/';
let userPath='./public/uploads/';

//  -----------    PAGE 1   --------------  set user name

app.post('/setname', (req,res) =>{
    userName = req.body.userName;
    console.log("server name set to: " + userName)
    var tmpdir = `./public/uploads/tmp`;
    userPath=`./public/uploads/${userName}`;
    if (!fs.existsSync(tmpdir)){
        fs.mkdirSync(tmpdir);
    }
    if (!fs.existsSync(userPath)){
        fs.mkdirSync(userPath);
    }
    res.send("User name set server side to: " + userName)
})



//  -----------    PAGE 2   --------------  Upload photos

//storage and how file is named
const storage = multer.diskStorage({
  destination:`./public/uploads/tmp`,
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
//put in a name variable instead of my image


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
  console.log("username: " + userName + " Path: " + userPath);
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
            mv(`./public/uploads/tmp/${req.file.filename}`, `${userPath}/${req.file.filename}`, (err) =>{console.log(err)})
          }
      }
  })
})





//  -----------    PAGE 2   --------------  send uploaded pics

app.get('/getPics', (req,res) =>{
    //let userFolder = 'tempImages'
    //const testFolder = `./public/${userFolder}/`;

    let imgNumber = 0
    let arrayOfImages = [];
    let imgObject = {
      number:imgNumber,
      originalFilename:'',
      newFilename:'',
      category:'unsorted',
      imgLocalUrl:''
    }

    fs.readdir(userPath, (err, files) => {
      files.forEach(file => {
        imgObject = {
          number:imgNumber,
          originalFilename:file,
          newFilename:'',
          category:'unsorted',
          imgLocalUrl:`http://localhost:8080/uploads/${userName}/${file}`
        }
        arrayOfImages.push(imgObject)
        imgNumber++
      });
      res.json(arrayOfImages);
    });  
})


// ----------------- Final Processing  -----------------------

//get array from front end - 1 request per category
app.post('/process',(req,res) =>{
  console.log(req.body)
  let currentArray = req.body

  //working userName DELETE
  userName="dave"

  //make folder - username/category
  userPath = `./public/uploads/${userName}`
  let catFolder = currentArray[0].category
  let catPath = `${userPath}/${catFolder}`
  if (!fs.existsSync(catPath)){
    fs.mkdirSync(catPath);
  }

  //move files in each category into sub folders
    //rename files in each folder
    //name structure - username - category -number(by array loop, not object entry)
    // fs.rename('oldFile.txt', 'newFile.txt', (err) => {
    //   if (err) throw err;
    //   console.log('Rename complete!');
    // });




  //zip entire file structure


  res.json(req.body)
})








app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})