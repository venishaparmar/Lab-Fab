import { connect } from "mongoose";

const mongoURI = "";

const connectToMongo = () => {
  try {
    connect(mongoURI, { useNewUrlParser: true });
    console.log("connected succesfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongo;