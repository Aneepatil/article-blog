import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 8800;
export const dbConnect = async (app) => {
  try {
    const connected = await connect(process.env.MONGO_URL);

    console.log(
      `MongoDB Connection SuccessFull and the host is ${connected.connection.host}`
    );
    app.listen(PORT, () => console.log(`Server connection is successfull..`));
  } catch (error) {
    console.log(`MongoDB Connection UnsuccessFull and the error is ${error}`);
  }
};
