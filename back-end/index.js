const express = require('express');
const multer = require('multer');
const path = require ('path');
const app = express();
require('dotenv').config()
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors({
    origin:"http://localhost:3000"
}))
const fs = require('fs');
var mv = require('mv');
var JSZip = require("jszip");
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('./public'));

let userName='client';
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

//SINGLE upload variable
const upload = multer({
  storage:storage,
  limits:{
      fileSize:100000000,
      fileFilter:function(req,res,cb){
          checkFileType(file,cb)
      }
  }
}).single('myImage');


//multi upload variable
const uploads = multer({
  storage:storage,
  limits:{
      fileSize:100000000,
      fileFilter:function(req,res,cb){
          checkFileType(file,cb)
      }
  }
}).array('myImage');

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

//multi upload endpoint
app.post('/uploads',(req,res) =>{
  //console.log("username: " + userName + " Path: " + userPath);
  uploads(req,res,(err) => {
      if(err){
        console.log(err)
        res.send(err)
      } else {
          //console.log(req.files)
          if(req.files == undefined){
            console.log("no file selected")
            res.send("no file selected")
          } else {
            //console.log(req.files)
            for (let i = 0; i < req.files.length ;i++){
              mv(`./public/uploads/tmp/${req.files[i].filename}`, `${userPath}/${req.files[i].filename}`, 
                (err) =>{
                  if(err){
                    console.log(err)
                  }
                })
            }
            res.json(req.files)
          }
      }
  })
})



// ------PAGE 2 DELETE ------

app.delete('/deletePic', (req, res)=>{
  let fileToDelete = req.body.file
  fs.unlink(`./public/uploads/${userName}/${fileToDelete}`, (err) =>{
    if(err){
      console.log("error deleting file: " + err)
    }
  })
  res.send("pic deleted: " + req.body.file)
})



//  -----------    PAGE 2   --------------  send uploaded pics

app.get('/getPics', (req,res) =>{
    let imgNumber = 0
    let arrayOfImages = [];
    let imgObject = {
      number:imgNumber,
      originalFilename:'',
      newFilename:'',
      category:'unsorted',
      imgLocalUrl:'',
      userName:userName
    }

    fs.readdir(userPath, (err, files) => {
      files.forEach(file => {
        imgObject = {
          number:imgNumber,
          originalFilename:file,
          newFilename:'',
          category:'unsorted',
          imgLocalUrl:`/uploads/${userName}/${file}`
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
  let currentArray = req.body
  //console.log(currentArray);

  userPath = `./public/uploads/${userName}`
  let catFolder = currentArray[0].category
  let catPath = `${userPath}/${catFolder}`
  let originalFileName = "";
  let ImgExtension = ".jpg"
  if (!fs.existsSync(catPath)){
    fs.mkdirSync(catPath);
  }
  //Make toZip Folder
  // if (!fs.existsSync(`${userPath}/toZip`)){
  //   fs.mkdirSync(`${userPath}/toZip`);
  // }


  //move files in each category into sub folders, rename files in each folder
    //name structure - username - category -number(by array loop, not object entry)
    for (let i = 0; i < currentArray.length;i++){
      originalFileName = currentArray[i].originalFilename
      ImgExtension = originalFileName.substr(21,5)
      fs.renameSync(`${userPath}/${currentArray[i].originalFilename}`, `${catPath}/${userName}-${currentArray[i].category}-${i}${ImgExtension}`
      );

      //after rename, copy to the zip folder
      //fs.copyFileSync(`${catPath}/${userName}-${currentArray[i].category}-${i}${ImgExtension}`, `${userPath}/toZip/${userName}-${currentArray[i].category}-${i}${ImgExtension}`
      //);
    }
  console.log("Final Processing done!")
  res.json(req.body)
})



// -------  PAGE 5 -----zip entire file structure

app.post('/zip', (req, res) =>{
  userName = req.body.userName
  let zipPath = `./public/uploads/${userName}`
  console.log("ZIP user name set to " + userName)
  console.log("zip path set to: "+ zipPath)

  let zip = new JSZip();

    if (fs.existsSync(`${zipPath}/chrono`)){
      let chronoFolder = zip.folder(`chrono`)
      let chronofiles = fs.readdirSync(`./public/uploads/${userName}/chrono/`)
      chronofiles.forEach(function(file){
        chronoFolder.file(file, fs.readFileSync(`./${zipPath}/chrono/${file}`)); 
      })
    }
    if (fs.existsSync(`${zipPath}/family`)){
      let familyFolder = zip.folder(`family`)
      let familyfiles = fs.readdirSync(`./public/uploads/${userName}/family/`)
      familyfiles.forEach(function(file){
        familyFolder.file(file, fs.readFileSync(`./${zipPath}/family/${file}`)); 
      })
    }
    if (fs.existsSync(`${zipPath}/extended`)){
      let extFolder = zip.folder(`extended`)
      let extfiles = fs.readdirSync(`./public/uploads/${userName}/extended/`)
      extfiles.forEach(function(file){
        extFolder.file(file, fs.readFileSync(`./${zipPath}/extended/${file}`)); 
      })
    }
    if (fs.existsSync(`${zipPath}/friends`)){
      let friendsFolder = zip.folder(`friends`)
      let friendsfiles = fs.readdirSync(`./public/uploads/${userName}/friends/`)
      friendsfiles.forEach(function(file){
        friendsFolder.file(file, fs.readFileSync(`./${zipPath}/friends/${file}`)); 
      })
    }
    if (fs.existsSync(`${zipPath}/fun`)){
      let funFolder = zip.folder(`fun`)
      let funfiles = fs.readdirSync(`./public/uploads/${userName}/fun/`)
      funfiles.forEach(function(file){
        funFolder.file(file, fs.readFileSync(`./${zipPath}/fun/${file}`)); 
      })
    }
    if (fs.existsSync(`${zipPath}/unsorted`)){
      let unsortedFolder = zip.folder(`unsorted`)
      let unsortedfiles = fs.readdirSync(`./public/uploads/${userName}/unsorted/`)
      unsortedfiles.forEach(function(file){
        unsortedFolder.file(file, fs.readFileSync(`./${zipPath}/unsorted/${file}`)); 
      })
    }

    zip
    .generateNodeStream({type:'nodebuffer',streamFiles:true})
    .pipe(fs.createWriteStream(`public/uploads/${userName}/${userName}-photos.zip`))
    .on('finish', function () {
        console.log("photos.zip written.");

        res.send(`http://localhost:8080/uploads/${userName}/${userName}-photos.zip`);
    });
})




//zipping all from 1 folder
app.post('/zip2', (req, res) =>{

  console.log(req.body)
  userName = req.body.userName
  let zipPath = `./public/uploads/${userName}/toZip`
  console.log("ZIP user name set to " + userName)
  console.log("zip path set to: "+ zipPath)

  let zip = new JSZip();
  
  if (fs.existsSync(`${zipPath}`)){
    let zipfiles = fs.readdirSync(`${zipPath}`)
    zipfiles.forEach(function(file){
      zip.file(file, fs.readFileSync(`${zipPath}/${file}`)); 
    })
  }

  zip
  .generateNodeStream({type:'nodebuffer',streamFiles:true})
  .pipe(fs.createWriteStream(`public/uploads/${userName}/${userName}-photos.zip`))
  .on('finish', function () {
      console.log("photos.zip written.");

      res.send(`http://localhost:8080/uploads/${userName}/${userName}-photos.zip`);
  });
})

//---------------DELETE ALL ON START OVER ---------

let rimraf = require('rimraf')

app.delete('/deleteAll', (req, res)=>{
  //userName = "tester"
  if(fs.existsSync(`./public/uploads/${userName}/`)){
    rimraf(`./public/uploads/${userName}/`, () =>{console.log("deleted user folder")})
  }

  res.send("user folder deleted")
})



// -------------- EMAIL NOTIFICATION ------------

var nodemailer = require('nodemailer');

app.post('/notify', (req,res) =>{

  console.log("notify endpoint hit")

  var transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: process.env.emailAddress,
      pass: process.env.emailPassword
    }
  });
  
  var mailOptions = {
    from: 'dellphotonotify@outlook.com',
    to: 'dellphotonotify@outlook.com',
    subject: `${req.body.name} Uploaded some photos`,
    text: `${req.body.name} has uploaded ${req.body.numPhotos} photos to our server
           ${req.body.message}`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send(error)
    } else {
      console.log('Email sent: ' + info.response);
      res.send("Email sent Successfully")
    }
  });

})





app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});