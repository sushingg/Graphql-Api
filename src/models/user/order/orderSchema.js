import mongoose from 'mongoose';
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
export default orderSchema;