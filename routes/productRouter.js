const router = require("express").Router();
const productController = require("../controllers/productController.js");

// Add Product
router.post("/addProduct", productController.addProduct);

// GET All Product
router.get("/getAllProducts", productController.getAllProducts);

// GET Published Product
router.get("/getPublishedProducts", productController.getPublishedProducts);

// GET Single Product by id
router.get("/getSingleProduct/:id", productController.getSingleProduct);

// Update a single Product
router.put("/updateProduct/:id", productController.updateProduct);

// Delete a single Product
router.delete("/deleteProduct/:id", productController.deleteProduct);

module.exports = router;
