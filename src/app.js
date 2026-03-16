const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.send("page1");
});
app.get("/hello", (req, res) => {
  res.send("page2");
});
app.get("/", (req, res) => {
  res.send("Hello world this is node js");
});
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
