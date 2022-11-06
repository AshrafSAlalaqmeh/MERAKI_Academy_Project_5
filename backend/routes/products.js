const express = require('express')
const {createNewProducts, getAllProducts, updateProductsById, deleteProductsById, searchProductsByTitle } = require('../controllers/products')
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization")
const productRouter = express.Router()

productRouter.post('/' , authentication, authorization("ADD_PRODUCT"), createNewProducts)
productRouter.get('/',getAllProducts)
productRouter.put('/:id' , authentication, authorization("UPDATE_PRODUCT"),  updateProductsById)
productRouter.delete('/:id' , authentication, authorization("DELETE_PRODUCT"), deleteProductsById)
productRouter.get("/title/:title" , searchProductsByTitle )

module.exports = productRouter

