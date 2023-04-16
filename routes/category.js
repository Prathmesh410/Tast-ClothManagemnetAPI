const express = require( "express");
const router = express.Router();

const {getCategoryById,createCategory,getCategory,getAllCategory,updateCategory,removeCategory} = require("../controllers/category")
const {getUserById} = require("../controllers/user")
const {isSignedIn, isAuthenticated, isAdmin,isSeller} = require("../controllers/auth")


//params
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);


//create
router.post("/category/create/:userId" ,isSignedIn, isAuthenticated,isSeller, createCategory);


//read routes
router.get("/category/:categoryId" , getCategory);
router.get("/categories" , getAllCategory);

//update
//update route is not authenticated 
router.put("/category/:categoryId/:userId" ,isSignedIn,isAuthenticated,isSeller, updateCategory);

//remove
router.delete("/category/:categoryId/:userId" ,isSignedIn,isAuthenticated,isSeller, removeCategory);
module.exports = router;