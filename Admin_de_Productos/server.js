const express = require("express");
const app = express();
const cors = require("cors");

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyProductsRoutes = require("./server/routes/products.routes");
AllMyProductsRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
