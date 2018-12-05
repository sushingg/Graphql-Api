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
	orderProducts: String,
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
async function addOrder(root, {
    orderPaymentId, orderTotal, orderEmail, orderFirstname, orderLastname, orderAddr1, orderAddr2, orderCountry, orderState, orderPostcode, orderPhoneNumber, orderComment, orderStatus, orderDate, orderProducts
}) {
    // args.password
	await authCheck(root.decoded)
	var charge = await makeCharge(orderTotal)
	var newOrder = new  order({
		orderPaymentId: charge.id,
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
		orderProducts: orderProducts,
		orderPaymentLink: charge.authorize_uri
    });
	await console.log(newOrder)
    const res = await newOrder.save()
    if (!res) {
        throw new Error('Error55')
    }
    return await res
}
const makeCharge = (amount) => {
	var amount = amount*100;
    console.log(amount)
    var currency = 'thb';
    var source = {
        'type':     'internet_banking_bbl',
        'amount':   amount,
        'currency': currency,
    };
    omise.sources.create(source).then(function(resSource) {
      return omise.charges.create({
        'amount':     amount,
        'source':     resSource.id,
        'currency':   currency,
        'return_uri': 'https://omise.co'
    });
    }).then(function(charge) {
      return charge
    }).catch(function(err) {
      console.log(err);
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