const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://namastheDB:Advaith%40%240526@namasthenode.uapxy5m.mongodb.net/devTinder",
    // It's good practice to specify the database name here, e.g., /devTinder
    // "mongodb+srv://namastheDB:Advaith%40%240526@namasthenode.uapxy5m.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
