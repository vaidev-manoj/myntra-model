const express = require('express')
const router = express.Router()
const cheackAuth = require('./../MiddleWare/CheakAuth')
const AllProductController = require('../controllers/AllProductController')
// var allProduct= ["https://i.pinimg.com/236x/e8/a9/5f/e8a95f6e68da24a1a85dec6f51118800--tie-dye-hoodie-hoodie-jacket.jpg" ,
// "https://www.parivarceremony.com/media/wysiwyg/Suits.jpg",
//  "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1700944/2019/6/8/972c9498-3a37-4d5d-976c-4493b4d5c0021559989322793-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--1.jpg",
//  "https://storage.sg.content-cdn.io/cdn-cgi/image/width=600,height=800,quality=60,format=auto,fit=cover,g=top/in-resources/22a79ec5-e694-4d7a-ac5a-85c8fa45b7f1/Images/ProductImages/Source/ITMSH02254CobaltLS%20(1).jpg",

//  "https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2020/01/Ajios-Rock-Ready-Styles-Mens-Collection-Gurkiran.jpg",
//  "http://www.tophitfashion.com/wp-content/uploads/Amazing-Style-Chinyere-Eid-Festive-Women%E2%80%99s-Collection-4.jpg",
//  "https://i.pinimg.com/474x/6d/06/2d/6d062da580e3e4040f4b64164d6b6bf7.jpg",
//  "https://www.mushq.pk/images/uploaded/homebanner/mainbnrmb.jpg"]


//  router.get("/get", (req,res,_next)=>{
//      res.send(allProduct.filter);
//    })
router.post('/add', cheackAuth, AllProductController.add)
router.get('/getById/:code', AllProductController.getById)
router.post('/filter', AllProductController.filter)
router.put('/update', cheackAuth, AllProductController.update)
router.delete('/remove', cheackAuth, AllProductController.remove)
module.exports = router