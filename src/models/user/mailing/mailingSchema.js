import mongoose from 'mongoose';
var mailingSchema = new mongoose.Schema({
	Firstname: String,
	Lastname: String,
	Addr1: String,
	Addr2: String,
	Country: String,
	State: String,
	Postcode: String,
	PhoneNumber: String,
});
export default mailingSchema;