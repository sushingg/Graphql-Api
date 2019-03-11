import order from '../models/order/orderSchema';
const hookApi = (data) => {
	console.log('recivehook')
	console.log(data.data)
	if(data.data.object='charge'){
		console.log(data.data.status)
		var params = {orderPaymentId:data.data.id,orderStatus:data.data.status}
		order.updateCharge(params)
	}
}

export default hookApi;