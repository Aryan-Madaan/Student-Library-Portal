if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
// const bookRoutes = require("./routes/bookRoute");
const studentRoutes = require("./routes/studentRoute");
const userRoutes = require("./routes/userRoute");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const testStu = require("./testStudent.json");
const testBook = require("./testBooks.json");

const jsonParser = bodyParser.json();
const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex: true,
  //useFindAndModify: false,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

process.on("unhandledRejection", (error) => {
  console.log("unhandledRejection", error.message);
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", studentRoutes);
// app.use("/", bookRoutes);
app.use("/", userRoutes);

// app.get("/books", (req, res, next) => {
//   res.send(testBook);
// });

// app.post("/books", jsonParser, (req, res, next) => {
//   testBook.books.push(req.body);
//   res.send(testBook);
// });

// app.put("/books/:id", jsonParser, (req, res, next) => {
//   const { id } = req.params;
//   const idx = testBook.books.findIndex((e) => e.id === id);
//   if (idx != -1) {
//     testBook.books.splice(idx, 1, req.body);
//   }
//   res.send(testBook);
// });

// app.delete("/books/:id", (req, res, next) => {
//   const { id } = req.params;
//   const idx = testBook.books.findIndex((e) => e.id === id);
//   if (idx != -1) {
//     testBook.books.splice(idx, 1);
//   }
//   res.send(testBook);
// });

app.listen(8080, () => {
  console.log("Listening to port 8080");
});
