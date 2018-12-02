import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {authCheck} from './../utils'
var orderSchema = new mongoose.Schema({
	orderPaymentId: String,
	orderTotal: Number,
	orderEmail: String,
	orderFirstname: String,
	orderLastname: String,
	orderAddr1: String,
	orderAddr2: String,
	orderCountry: String,
	orderState: String,
	orderPostcode: String,
	orderPhoneNumber: String,
	orderComment: String,
	orderStatus: String,
	orderDate: {
			type: Date,
			default: Date.now
		},
	orderProducts: {
		productSlug: String,
		productTitle: String,
		productPrice: Number,
		productOptions: String,
		quantity: Number,
	
}
});
let order = mongoose.model('order', orderSchema);
async function getListOfOrder() {
    const res = order.find({}).exec();
    if (!res) {
        throw new Error('Error')
    }
    return await res
}
async function getOrderById(root, {id}) {
	var valid = mongoose.Types.ObjectId.isValid(id);
	await console.log(valid)
    const res = order.findById(id).exec();
	await console.log(await res)
    if (!res) {
        throw new Error('Error')
    }
    return await res
}
async function getOrder(root, params) {
	await console.log(params)
    const res = order.findOne(params).exec();
	await console.log(await res)
    if (await !res) {
        throw new Error('Error')
    }
    return await res
}
async function addOrder(root, params,{
    orderPaymentId, orderTotal, orderEmail, orderFirstname, orderLastname, orderAddr1, orderAddr2, orderCountry, orderState, orderPostcode, orderPhoneNumber, orderComment, orderStatus, orderDate ,productSlug
}) {
    // args.password
	console.log(params.orderProducts)
	await authCheck(root.decoded)
	var newOrder = new  order({
		orderPaymentId: orderPaymentId,
		orderTotal: orderTotal,
		orderEmail: orderEmail,
		orderFirstname: orderFirstname,
		orderLastname: orderLastname,
		orderAddr1: orderAddr1,
		orderAddr2: orderAddr2,
		orderCountry: orderCountry,
		orderState: orderState,
		orderPostcode: orderPostcode,
		orderPhoneNumber: orderPhoneNumber,
		orderComment: orderComment,
		orderStatus: orderStatus,
		orderDate: orderDate,
		orderProducts:params.orderProducts
    });
	await console.log(newOrder)
    const res = await newOrder.save()
    if (!res) {
        throw new Error('Error55')
    }
    return await res
}
async function updateOrder(root,params) {
	await authCheck(root.decoded)
    const res = await order.findByIdAndUpdate(params.id,{$set:params},{ new: true }).exec();
    if (!res) {
        throw new Error('Error')
    }
    return await res

}
module.exports = {
    order, getListOfOrder, getOrderById, addOrder, updateOrder, getOrder,
}