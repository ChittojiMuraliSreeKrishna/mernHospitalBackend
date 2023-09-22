// Import required modules
const express = require('express');
// Create an Express application
const app = express();
const multer = require("multer");
const formData = multer();
const cors = require("cors");
const Router = require('./routes')


// parse application/json
app.use(express.json({ limit: "10mb" }));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false, limit: "10mb" }));

// read form data from request
app.use(formData.any());

// Router 
app.use("/", Router);

// using cors to allow preferred domains and headers
app.use(
  cors({
    origin: [
      "http://localhost:3000"
    ],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);



// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
