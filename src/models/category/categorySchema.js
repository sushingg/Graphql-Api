import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {authCheck} from './../utils'
var categorySchema = new mongoose.Schema({
    categorySlug: String,
    categoryTitle: String,
    categoryTags: [{
        tag: String
    }]
});
let category = mongoose.model('category', categorySchema);
async function getListOfCategories() {
    const res = category.find({}).exec();
    if (!res) {
        throw new Error('Error')
    }
    return await res
}
async function getCategoryById(root, {id}) {
	var valid = mongoose.Types.ObjectId.isValid(id);
	await console.log(valid)
    const res = category.findById(id).exec();
	await console.log(await res)
    if (!res) {
        throw new Error('Error')
    }
    return await res
}
async function getCategory(root, params) {
	await console.log(params)
    const res = category.findOne(params).exec();
	await console.log(await res)
    if (await !res) {
        throw new Error('Error')
    }
    return await res
}
async function addCategory(root, {
    categorySlug, categoryTitle, categoryPrice, categoryDescription, categoryPublished, categoryTags, categoryOptions, categoryAddedDate, categoryImage
}) {
    // args.password
	await authCheck(root.decoded)
	var newCategory = new  category({
		categorySlug: categorySlug,
		categoryTitle: categoryTitle,
		categoryPrice: categoryPrice,
		categoryDescription: categoryDescription,
		categoryPublished: categoryPublished,
		categoryTags: categoryTags,
		categoryOptions: categoryOptions,
		categoryAddedDate: categoryAddedDate,
		categoryImage: categoryImage
    });
	await console.log(newCategory)
    const res = await newCategory.save()
    if (!res) {
        throw new Error('Error55')
    }
    return await res
}
async function updateCategory(root,params) {
	await authCheck(root.decoded)
    const res = await category.findByIdAndUpdate(params.id,{$set:params},{ new: true }).exec();
    if (!res) {
        throw new Error('Error')
    }
    return await res

}
module.exports = {
    category, getListOfCategories, getCategoryById, addCategory, updateCategory, getCategory,
}