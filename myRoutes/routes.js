const express = require("express");
//const bodyParser = require("body-parser");
const router = express.Router(); 
//app.use(bodyParser.urlencoded({ extended: true }));

router.get("/index.html", (req, res) => {
    res.sendFile("./views/index.html", {
        root: __dirname,
    });
});
 
router.get("/about.html", (req, res) => {
    res.sendFile("./views/about.html", {
        root: __dirname,
    });
});

router.get("/contact.html", (req, res) => {
    res.sendFile("./views/contact.html", {
        root: __dirname,
    });
});

router.get("/Register_User.html", (req, res) => {
    res.sendFile("./views/Register_User.html", {
        root: __dirname,
    });
});

router.post("/Register_User.html", async (req, res) => {
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username,
        password: hash
    });
    await user.save();
    res.redirectFile("./views/index.html");
    
});

router.get("/select_location.html", (req, res) => {
    res.sendFile("./views/select_location.html", {
        root: __dirname,
    });
});

router.get("/Driver_Register_Form.html", (req, res) => {
    res.sendFile("./views/Driver_Register_Form.html", {
        root: __dirname,
    })
})

router.get("/Driver_Login_Form.html", (req, res) => {
    res.sendFile("./views/Driver_Login_Form.html", {
        root: __dirname,
    })
})

router.get("/shipment_type.html", (req, res) => {
    res.sendFile("./views/shipment_type.html", {
        root: __dirname,
    })
})

router.get("/Signin_user.html", (req, res) => {
    res.sendFile("./views/Signin_user.html", {
        root: __dirname,
    })
})

router.post("/Signin_user.html", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
    res.sendFile("./views/index.html", {
    root: __dirname,
});
    }else {
    res.send("Invalid email or password, please try again");
    }
});

module.exports = router;