const express = require("express");
const passport = require("passport");
const strategy = require("./jwtStrategy");

const app = express();
app.use(express.json());

app.use(passport.initialize());
passport.use("jwt", strategy);
const router = express.Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send({ message: "From controller!" });
  }
);

app.use("/base", router);

app.listen(3000, () => {
  console.log("server running...");
});
