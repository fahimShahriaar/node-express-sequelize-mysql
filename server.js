const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring Routers
const productRouter = require("./routes/productRouter.js");

// middlewares
app.use(cors({ origin: "http://localhost:8081" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/product", productRouter);
app.get("/", async (req, res) => {
  res.json({ msg: "Hello World" });
});

// start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
