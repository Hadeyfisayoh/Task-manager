const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Tak manager app");
});

app.use("/api/v1/tasks", tasks);

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);

    app.listen(port, () => {
      console.log(`Server is listening at ${port}....`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
