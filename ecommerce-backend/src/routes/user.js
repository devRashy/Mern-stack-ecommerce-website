const express = require('express')
const { signUp, signIn, userSignIn } = require("../controllers/userController");
const router = express.Router()



router.post('/signup', signUp);
router.post('/signin', signIn);


router.post("/profile", userSignIn,(req, res) => {
    res.status(200).json({
        user: "profile"
    })
})


module.exports = router;