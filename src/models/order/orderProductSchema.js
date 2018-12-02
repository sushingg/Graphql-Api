import mongoose from 'mongoose';

var orderProductSchema = new mongoose.Schema({
    productSlug: String,
    productTitle: String,
    productPrice: Number,
    productOptions: String,
	quantity: Number,

});
module.exports = {	orderProductSchema	}

