const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
// const upload = multer({ dest: "/uploads/" });

const app = express();
app.use(cors());
app.use(express.json());

// MongoDb
const mongoose = require("mongoose");

// DataBase Connection
const DB_LINK = require("./config/db");
// mongoose
//   .connect(DB_LINK)
//   .then(console.log("Database conneted"))
//   .catch((err) => {
//     console.log("Error Connecing to db");
//   });

// Trying another Approach
async function connectDb(link) {
  try {
    let res = await mongoose.connect(link);
    if (res) {
      console.log("DataBase Connected");
    }
  } catch (err) {
    console.log("Error Connected To DB");
  }
}

connectDb(DB_LINK);

// Shift routes
const shiftRoutes = require("./routes/shiftRoutes");
const dailyShiftRoutes = require("./routes/dailyShiftRoutes");

// User Routes
const userRouter = require("./routes/userRoutes");

// Multer

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `user-${Date.now()}.jpeg`);
  },
});
const filter = function (req, file, cb) {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Not an Image! Please upload an image"), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: filter,
});

app.post("/upload", upload.single("file"), function (req, res, next) {
  console.log("Photo Uploaded");
  next();
});

app.use("/images", express.static(path.join(__dirname, "/uploads/")));

// Routes Middleware
app.use("/api/user", userRouter);
app.use("/api/shifts", shiftRoutes);
app.use("/api/dailyshifts", dailyShiftRoutes);

app.use("/", function (req, res) {
  res.send("<h1> Backend API </h1>");
});
const PORT = 7000;
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
