const express = require("express")
const router = express.Router()
const { glandingpage, gadminsignup, verifytoken, resgisteradmin, adminlogin, uploadimage, geTdashboard } = require('../controller/admin.controller')

const { validate } = require("../middleware/validator")
const { adminvalidation } = require("../middleware/adminvalidation")
const { uploadchat } = require("../controllers/adminController")

router.get('/', glandingpage);
router.get("/dashboard", geTdashboard);
router.get("/signup", gadminsignup);
// router.get('/verify', verifytoken);
router.post('/signup', resgisteradmin);
router.post('/login', adminlogin);
router.post('/upload', uploadimage);
router.post("/comment", uploadchat)


module.exports = router;