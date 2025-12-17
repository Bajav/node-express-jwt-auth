import mongoose from "mongoose";
// database connection

const connectDB = (dburl,port,app) => {
  mongoose
    .connect(dburl)
    .then((result) => app.listen(port))
    .catch((err) => console.log(err));
};

export default connectDB;