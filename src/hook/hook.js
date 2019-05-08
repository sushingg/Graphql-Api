import user from '../models/user/userSchema';
const hookApi = (data) => {
	console.log('recivehook')
	console.log(data.data)
	if(data.data.object='charge'){
		console.log(data.data.status)
		var params = {orderPaymentId:data.data.id,orderStatus:data.data.status}
		user.updateCharge(params)
	}
}

export default hookApi;