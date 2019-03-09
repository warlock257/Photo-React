const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors({
    origin:"http://localhost:3000"
}))
const fs = require('fs');
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));

let profile = require('./routes/profile')
app.use('/profile',profile)

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