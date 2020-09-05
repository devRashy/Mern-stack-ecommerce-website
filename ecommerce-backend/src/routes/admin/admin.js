const express = require('express');
const { adminSignIn, adminSignUp } = require('../../controllers/admin/adminController');
const router = express.Router()



router.post('/admin/signup', adminSignUp);
router.post('/admin/signin', adminSignIn);




// router.post("/profile", userSignIn,(req, res) => {
//     res.status(200).json({
//         user: "profile"
//     })
// })


module.exports = router;