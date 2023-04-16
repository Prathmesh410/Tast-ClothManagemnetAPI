const express = require( "express");
const router = express.Router();

const {getProductById,createProduct,photo,getProduct,deleteProduct,updateProduct,getAllProducts,getAllUniqueCategories} = require("../controllers/product");
const {getUserById} = require("../controllers/user");
const {isSignedIn, isAuthenticated, isAdmin} = require("../controllers/auth");



//parms
router.param("userId", getUserById);
router.param("productId", getProductById);


//routes
//create route
router.post("/product/create/:userId" ,isSignedIn, isAuthenticated, isAdmin, createProduct);

router.get("/product/:productId",getProduct);

router.get("/product/photo/:productId",photo);

router.get("/products", getAllProducts);

router.delete("/product/:productId/:userId",isSignedIn, isAuthenticated, isAdmin,deleteProduct );

router.put("/product/:productId/:userId",isSignedIn, isAuthenticated, isAdmin,updateProduct );

router.get("/products/categories", getAllUniqueCategories);

module.exports = router;