const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Balakarthik", lastName: "Pendyala" });
});
app.post("/user", (req, res) => {
  res.send("Data saved to data base");
});
app.delete("/user", (req, res) => {
  res.send("Data deleted from data base");
});
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
