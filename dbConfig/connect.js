const mongoose = require("mongoose");
const colors = require("colors");

const connect = () => {
  const con = mongoose
    .connect(
      "mongodb+srv://sparkstoideasdev4:cIUfWwygFLIvNVIZ@cluster0.vvexfby.mongodb.net/annie"
    )
    .then(() => {
      console.log("DB Connect successfuly".bgWhite.cyan);
    })
    .catch((err) => {
      console.log("Error in db connection", err);
    });
};

module.exports = connect;
