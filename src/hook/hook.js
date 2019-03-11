const hookApi = (data) => {
	console.log('recivehook')
	console.log(data.data)
	if(data.data.object='charge'){
		console.log(data.data.status)
	}
}

export default hookApi;