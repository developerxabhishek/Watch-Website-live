const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const database = require("./db");

const userRouter = require("./routes/user");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/api/user", userRouter);

const PORT = process.env.PORT || 8000;




app.listen(8000, () => {
  console.log(`App is running on port ${PORT}`);
});
