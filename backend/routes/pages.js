const express= require('express');
const router = express.Router();

router.get("/", (req, res) => {    
    res.render("home");
});

router.get("/login", (req, res) => {    
    res.render("login");
});

router.get("/signup", (req, res) => {    
    res.render("signup");
});

router.get("/aboutus", (req, res) => {    
    res.render("aboutus");
});

module.exports = router;