import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
var userSchema = new mongoose.Schema({
        firstName: String,
        lastName: String,
        email: String,
		password: String,
        address1: String,
        address2: String,
        country: String,
        state: String,
        postcode: String,
        phone: String,
        created: {
			type: Date,
			default: Date.now
		},
		admin: {
			type: Boolean,
			default: false
		}
});
var date = new Date();
//date.toISOString(); //"2011-12-19T15:28:46.493Z"

let user = mongoose.model('user', userSchema);
async function hashPassword (password) {
  const saltRounds = 10;

  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function(err, hash) {
      if (err) reject(err)
      resolve(hash)
    });
  })
  return hashedPassword
}
async function authCheck (decoded) {
	if (decoded.error){
		throw new Error(decoded.message)
	}
  return await true
}
async function auth(root, {email, password}) {
    // args.password
    const check = await user.findOne({
        email: email
    }).exec()
    if (!check) {
        throw new Error('No such user found')
    }else{
    if (!bcrypt.compareSync(password,check.password)) {
        throw new Error('Invalid password')
    }}
    console.log(check)
    const payload = {
        userId: check.id,
        email: check.email,
        admin: check.admin,
		exp: Math.floor(Date.now() / 1000) + (60 * 60),
    };
    const token = jwt.sign(payload, 'secretshin')
    return await {
        token, email,
    }
}
async function getListOfUsers() {
    const res = user.find({}).exec();
    if (!res) {
        throw new Error('Error')
    }
    return await res
}

async function getUserById(root, {id}) {
	var valid = mongoose.Types.ObjectId.isValid(id);
	await console.log(valid)
    const res = user.findById(id).exec();
	await console.log(await res)
    if (!res) {
        throw new Error('Error')
    }
    return await res
}
async function getUser(root, params) {
	await console.log(params)
    const res = user.findOne(params).exec();
	await console.log(await res)
    if (await !res) {
        throw new Error('Error')
    }
    return await res
}
async function addUser(root, {
    firstName, lastName, email, password, address1, address2, country, state, postcode, phone, admin
}) {
	await authCheck(root.decoded)
	var newUser = new  user({
        firstName: firstName,
        lastName: lastName,
        email: email,
		password: await hashPassword(password),
        address1: address1,
        address2: address2,
        country: country,
        state: state,
        postcode: postcode,
        phone: phone,
		admin: admin
    });
    const res = await newUser.save()
    if (!res) {
        throw new Error('Error55')
    }
    return await res
}
async function updateUser(root,params) {
	await authCheck(root.decoded)
    const res = await user.findByIdAndUpdate(params.id,{$set:params},{ new: true }).exec();
    if (!res) {
        throw new Error('Error')
    }
    return await res

}
module.exports = {
    user, auth, getListOfUsers,getUserById,addUser,updateUser,getUser,
}