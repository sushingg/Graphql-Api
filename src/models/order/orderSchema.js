import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {authCheck} from './../utils'
var omise = require('omise')({
  'publicKey': process.env.OMISE_PUBLIC_KEY,
  'secretKey': process.env.OMISE_SECRET_KEY,
  'omiseVersion': '2017-11-02'
});
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
	orderProducts: [{
		productSlug: String,
		productTitle: String,
		productPrice: Number,
		productOptions: String,
		quantity: Number,
		
	}],
	orderPaymentLink: String
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
    orderPaymentId, orderTotal, orderEmail, orderFirstname, orderLastname, orderAddr1, orderAddr2, orderCountry, orderState, orderPostcode, orderPhoneNumber, orderComment, orderStatus, orderDate ,productSlug, orderProducts
}) {
    // args.password
	console.log(params)
	//await authCheck(root.decoded)
	var charge = await makeCharge(params.orderTotal)
	console.log(charge)
	var newOrder = await new  order({
		orderPaymentId: charge.id,
		orderTotal: params.orderTotal,
		orderEmail: params.orderEmail,
		orderFirstname: params.orderFirstname,
		orderLastname: params.orderLastname,
		orderAddr1: params.orderAddr1,
		orderAddr2: params.orderAddr2,
		orderCountry: params.orderCountry,
		orderState: params.orderState,
		orderPostcode: params.orderPostcode,
		orderPhoneNumber: params.orderPhoneNumber,
		orderComment: params.orderComment,
		orderStatus: params.orderStatus,
		orderDate: params.orderDate,
		orderProducts:params.orderProducts,
		orderPaymentLink:charge.authorize_uri
    });
    
	await console.log(newOrder)
    const res = await newOrder.save()
    if (!res) {
        throw new Error('Error55')
    }
    return await res
}
async function makeCharge(amount){
	amount = amount*100;
    console.log(amount)
    var currency = 'thb';
    var source = {
        'type':     'internet_banking_bbl',
        'amount':   amount,
        'currency': currency,
    };
    return omise.sources.create(source).then(function(resSource) {
      return omise.charges.create({
        'amount':     amount,
        'source':     resSource.id,
        'currency':   currency,
        'return_uri': 'https://omise.co'
    });
    }).then(function(charge) {
      return charge
    }).catch(function(err) {
      return  err
    });
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