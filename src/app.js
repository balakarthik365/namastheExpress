const express = require("express");
const app = express();
const {
  checkUserAuthorization,
  checkAdminAuthorization,
} = require("./middleWare/auth");
app.use("/user", checkUserAuthorization);

app.get("/admin", checkAdminAuthorization, (req, res, next) => {
  res.send("Welcome Admin!!");
});

app.get("/user/getUser", (req, res) => {
  console.log("Into the users page.");
  res.send("Welcome User!!");
});

app.get("/admin/login", (req, res) => {
  console.log("Into the login page.");
  res.send("Please login");
});
app.delete("/user/deleteUser", (req, res) => {
  console.log("Into the delete users page.");
  res.send("Welcome User!!");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
