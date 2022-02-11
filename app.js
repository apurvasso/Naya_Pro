const express = require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 9000;
const url = "mongodb://localhost/nayadatabase";
//connect to database mongoose

try {
  //this part of the code took long time
  mongoose.connect(url, {
    useNewUrlParser: true, //parser to avoid the warning
    useUnifiedTopology: true,
  });
} catch (error) {
  console.log("connection err", error);
}
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

// mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
// .then( () => console.log("connection established...")).catch((err) => console.log(err))
//parser to avoid the warning

// mongoose.Promise = global.Promise;
// mongoose.connection.on("error", (error) => {
//   console.log("Problem connection to the database" + error);
// });

//get the connection holder---handle

const con = mongoose.connection;

con.on("open", function () {
  console.log("connnnnected...");
}); //whenever it is open I want to execute a callback function which prints a statement

app.use(express.json);

const nayaRouter = require("./routes/nayacollection"); //module name is furniture.js, furnitureRouter will be used for all routing
//purpose
//now you have to add a middle ware
app.use("/nayacollection", nayaRouter); //for all the furniture requests you have to send the requests to furnitureRouter

//app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
