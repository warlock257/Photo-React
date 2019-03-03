const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors({
    origin:"http://localhost:3000"
}))
const PORT = 8080;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


let profile = require('./routes/profile')
app.use('/profile',profile)


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})