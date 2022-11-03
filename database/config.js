const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN);
    console.log("DB online" );
  } catch (error) {
    console.log(error);
    throw new Error("Error al iniciar db");
  }
};


module.exports = {
    dbConnect
}