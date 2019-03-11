import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {authCheck} from './../utils'
var productSchema = new mongoose.Schema({
    productSlug: String,
    productTitle: String,
    productPrice: Number,
    productDescription: String,
    productPublished: String,
    productTags:  [{
        tag: String
    }],
    productOptions: String,
    productAddedDate: {
        type: Date,
		default: Date.now
    },
    productImage: String
});
let product = mongoose.model('product', productSchema);
async function getListOfProducts() {
    const res = product.find({}).exec();
    if (!res) {
        throw new Error('Error')
    }
    return await res
}
async function getProductById(root, {id}) {
	var valid = mongoose.Types.ObjectId.isValid(id);
	await console.log(valid)
    const res = product.findById(id).exec();
	await console.log(await res)
    if (!res) {
        throw new Error('Error')
    }
    return await res
}
async function getProduct(root, params) {
	await console.log(params)
    const res = product.findOne(params).exec();
	await console.log(await res)
    if (await !res) {
        throw new Error('Error')
    }
    return await res
}
async function addProduct(root, {
    productSlug, productTitle, productPrice, productDescription, productPublished, productTags, productOptions, productAddedDate, productImage
}) {
    // args.password
	await authCheck(root.decoded)
	var newProduct = new  product({
		productSlug: productSlug,
		productTitle: productTitle,
		productPrice: productPrice,
		productDescription: productDescription,
		productPublished: productPublished,
		productTags: productTags,
		productOptions: productOptions,
		productAddedDate: productAddedDate,
		productImage: productImage
    });
	await console.log(newProduct)
    const res = await newProduct.save()
    if (!res) {
        throw new Error('Error55')
    }
    return await res
}
async function updateProduct(root,params) {
	await authCheck(root.decoded)
    const res = await product.findByIdAndUpdate(params.id,{$set:params},{ new: true }).exec();
    if (!res) {
        throw new Error('Error')
    }
    return await res

}
module.exports = {
    product, getListOfProducts, getProductById, addProduct, updateProduct, getProduct,
}