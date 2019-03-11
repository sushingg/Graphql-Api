import order from '../models/order/orderSchema';
const hookApi = (data) => {
	console.log('recivehook')
	console.log(data.data)
	if(data.data.object='charge'){
		console.log(data.data.status)
		var params = {orderPaymentId:data.data.orderPaymentId,orderStatus:data.data.status}
		order.updateOrderBy(data.data,params)
	}
}

export default hookApi;