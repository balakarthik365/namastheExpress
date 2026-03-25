const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
app.use(express.json());
/*const {
  checkUserAuthorization,
  checkAdminAuthorization,
} = require("./middleWare/auth");
app.use("/user", checkUserAuthorization);

app.get("/admin", checkAdminAuthorization, (req, res, next) => {
  res.send("Welcome Admin!!");
});

app.use("/", (err, req, res, next) => {
  //this order matters alot
  if (err) {
    res.status(500).send("Something went wrong");
  }
});
app.get("/user/getUser", (req, res) => {
  try {
    throw new Error("error");
    console.log("Into the users page.");
    res.send("Welcome User!!");
  } catch (err) {
    if (err) {
      res.status(500).send("Something went wrong with in getUser");
    }
  }
});

app.get("/admin/login", (req, res) => {
  console.log("Into the login page.");
  res.send("Please login");
});
app.delete("/user/deleteUser", (req, res) => {
  console.log("Into the delete users page.");
  res.send("Welcome User!!");
});*/
//create the route handler
app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User created successfully");
  } catch (err) {
    const errResp = (err, "error in creating user");
    res.status(400).send(errResp);
  }
});
connectDB()
  .then(() => {
    console.log("Connected to DB...!");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err, "error in connecting to DB");
  });
