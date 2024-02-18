const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
     
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  })
  
  const upload = multer({ storage })

app.set("view engine","ejs")
app.use(express.urlencoded({extended:false}))






app.get('/',function(req,res){
    res.render('homepage')
})

app.post('/upload',upload.single('profileImage'),function(req,res){


    console.log(req.body);
    console.log(req.file);


    return res.redirect('/')
})

app.listen(port, () =>
 console.log(`Example app listening on port ${port}!`))