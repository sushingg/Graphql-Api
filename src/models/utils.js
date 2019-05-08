async function authCheck (decoded) {
	if (decoded.error){
		throw new Error(decoded.message)
	}
	if (!decoded.admin){
		throw new Error('Request Permission')
	}
  return await true
}
async function userCheck (decoded) {
	if (decoded.error){
		throw new Error(decoded.message)
	}
  return await true
}
module.exports = {userCheck,userCheck}