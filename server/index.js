import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import useRouter from "./routes/user.js";
import cardRouter from "./routes/card.js";
const port = 5000;

const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", useRouter); //localhost:5000/users/signup
app.use("/card", cardRouter);
const MONGOODB_URL =
  "mongodb+srv://jonathanmruiz:maniydante@cluster0.hhceavj.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGOODB_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => console.log(`${error} Did not connect`));
