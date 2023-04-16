const category = require("../models/category");
const Product = require("../models/product");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const router = require("../routes/product");
const { parseInt } = require("lodash");

exports.getProductById = (req, res, next, id) => {
  Product.findById(id)
    .populate("category")
    .exec((err, product) => {
      if (err) {
        return res.status(400).json({
          error: "Product not found",
        });
      }
      req.product = product;
      next();
    });
};

exports.createProduct = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "problem with image",
      });
    }
    // destructure the fields
    const { name, description, price, category, stock } = fields;

    if (!name || !description || !price || !category || !stock) {
      return res.status(400).json({
        error: "Please include all fields",
      });
    }

    let product = new Product(fields);

    // handle file here
    if (files.photo) {
      if (Array.isArray(files.photo)) {
        // If multiple files were uploaded
        let photos = [];
        files.photo.forEach((file) => {
          if (file.size > 30000000) {
            return res.status(400).json({
              error: "File size too big!",
            });
          }
          photos.push({
            data: fs.readFileSync(file.path),
            contentType: file.type,
          });
        });
        product.photo = photos;
      } else {
        // If single file was uploaded
        if (files.photo.size > 30000000) {
          return res.status(400).json({
            error: "File size too big!",
          });
        }
        product.photo = [
          {
            data: fs.readFileSync(files.photo.path),
            contentType: files.photo.type,
          },
        ];
      }
    }

    // save to the DB
    product.save((err, product) => {
      if (err) {
        res.status(400).json({
          error: "Saving product in DB failed",
        });
      }
      res.json(product);
    });
  });
};
