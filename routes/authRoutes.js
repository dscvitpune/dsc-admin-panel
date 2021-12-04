const { signUp, logIn, logOut } = require("../controllers/auth");
const {restrictUnauth} = require("../middlewares/requireAuth")


// router.use(express.static('../public'));

// router.post("/signUp", signUp);
// router.post("/logIn", logIn);
// router.get("/allUsers", getProfiles);
// router.get("/dashboardtwo", (req, res) => {
//     res.render("dashboard", {layout: "index"});
// })
// router.get("/logintwo", (req, res) => {
//     res.render("logIn", {layout: "index", errorsExist: false});
// })

// module.exports = router;
module.exports = (app) => {
    app.post("/auth/signup", signUp);
    app.post("/auth/login", logIn);
    app.post("/auth/logout",restrictUnauth,logOut);
    // app.get("/auth/allUsers", getProfiles);
}