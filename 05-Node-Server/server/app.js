require("dotenv").config();
let express = require("express");
let app = express();
let test = require("./controllers/testcontroller");
let user = require("./controllers/usercontroller");
let authTest = require("./controllers/authtestcontroller"); //! DOUBLE CHECK
let sequelize = require("./db");
app.use(express.json());
app.use(require("./middleware/headers"));
sequelize.sync();

sequelize.authenticate().then(
  function () {
    console.log("Connected to workoutlog postgres database");
  },
  function (err) {
    console.log(err);
  }
);

app.use("/test", test);
app.use("/api/user", user);
app.use("/api/test", function (req, res) {
  res.send("This is data from the /api/test endpoint. It's from the server.");
});
app.use(require("./middleware/validate-session"));
app.use("/authtest", authTest);

app.listen(process.env.PORT, function () {
  console.log(`app is listening on port ${process.env.PORT}`);
});
