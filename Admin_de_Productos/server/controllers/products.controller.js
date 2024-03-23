const Products = require("../models/products.model");

module.exports.findAllProducts = (req, res) => {
  Products.find()
    .then((allDaProducts) => res.json({ products: allDaProducts }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleProduct = (req, res) => {
  Products.findOne({ _id: req.params.id })
    .then((oneSingleProduct) => res.json({ products: oneSingleProduct }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewProduct = (req, res) => {
  Products.create(req.body)
    .then((newlyCreatedProduct) => res.json({ products: newlyCreatedProduct }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingProduct = (req, res) => {
  Products.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedProduct) => res.json({ products: updatedProduct }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingProduct = (req, res) => {
  Products.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
