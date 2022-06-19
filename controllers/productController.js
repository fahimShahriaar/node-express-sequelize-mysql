// requiring console log color
const { color, log } = require("console-log-colors");
const { red, green, cyan } = color;

const db = require("../models");

// Creating Models for the database tables
const Product = db.products;

// Create Product
const addProduct = async (req, res, next) => {
  try {
    const { title, price, description, published } = req.body;
    const product = await Product.create({
      title,
      price,
      description,
      published: published ? published : false,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Get al product
const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Get a single product by id
const getSingleProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ where: { id: id } });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update a product
const updateProduct = async (req, res, next) => {
  //   console.log("hit for update");
  log.green("hit for update");
  try {
    const id = req.params.id;
    const product = await Product.update(req.body, { where: { id: id } });
    res.status(200).json(product);
  } catch (error) {
    log.red(error);
    res.status(500).json({ error });
  }
};

// Delete a product
const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Product.destroy({ where: { id: id } });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Get published products
const getPublishedProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll({ where: { published: true } });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Export all the functions
module.exports = {
  addProduct,
  getAllProducts,
  getPublishedProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
