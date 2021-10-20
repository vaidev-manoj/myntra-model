const express = require('express')
const router = express.Router()
const imageController = require('../controllers/ImageController')
var images = ["https://d2sj89osparb2a.cloudfront.net/images/campaigns/myntra/blog-banner.jpg",
"https://cdn.static-zoutons.com/images/originals/blog/BANNER2_1590066235.png",
"https://www.couponsloka.com/wp-content/uploads/2019/11/myntra_v3.jpg",
"https://trak.in/wp-content/uploads/2018/03/Myntra-Banner-Opt-1.jpg"
]
router.get("/get", (_req,res,next)=>{
    res.send(images);
  })
router.post('/add', imageController.add)
router.get('/get', imageController.get)
module.exports = router