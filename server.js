if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 4001;
const URL = process.env.MONGO_URL;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use((_, res, next) => {

	res.set({
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Content-Type, access_token',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
	})

	next()
})

// Routes
app.use("/api", require("./routes/foodRouter"));
app.use("/api", require("./routes/leadRouter"));
app.use("/api", require("./routes/upload"));

const start = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, console.log(`Server started on th port ${PORT}`));
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

start();
