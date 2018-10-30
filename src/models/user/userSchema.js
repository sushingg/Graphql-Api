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
        admin: check.admin
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
    const res = user.findOne({id: id}).exec();
    if (!res) {
        throw new Error('Error')
    }
    return await res
}
async function getUserByName(root, {name}) {
    const res = user.findOne({name: name}).exec();
    if (!res) {
        throw new Error('Error')
    }
    return await res
}
async function addUser(root, {
    firstName, lastName, email, password, address1, address2, country, state, postcode, phone, admin
}) {
    // args.password
	await console.log('1')
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
	await console.log(newUser)
    const res = await newUser.save()
    if (!res) {
        throw new Error('Error55')
    }
    return await res
}
async function updateUser(root, {
    id, firstName, lastName, email, address1, address2, country, state, postcode, phone, admin
}) {
    // args.password
	var updateUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        address1: address1,
        address2: address2,
        country: country,
        state: state,
        postcode: postcode,
        phone: phone,
        admin: Boolean
    };
    const res = await user.findOneAndUpdate({
            id: id
        }, {
            $set: updateUser
        }, {
            returnNewDocument: true
        }).exec();
    if (!res) {
        throw new Error('Error')
    }
    return await {
        res
    }
}
module.exports = {
    user, auth, getListOfUsers,getUserById,getUserByName,addUser,updateUser,
}
/*
module.exports.getListOfUsers = () => {
  return new Promise((resolve, reject) => {
    user.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};
module.exports.getUserById = (root, {
    id
}) = > {
    return new Promise((resolve, reject) = > {
        user.findOne({
            id: id
        }).exec((err, res) = > {
            err ? reject(err) : resolve(res);
        });
    });
};
module.exports.getUserByName = (root, {
    name
}) = > {
    return new Promise((resolve, reject) = > {
        user.findOne({
            name: name
        }).exec((err, res) = > {
            err ? reject(err) : resolve(res);
        });
    });
};
module.exports.getUserByPosition = (root, {
    id
}) = > {
    return new Promise((resolve, reject) = > {
        user.find({}).exec((err, res) = > {
            err ? reject(err) : resolve(res[id]);
        });
    });
};
module.exports.addUser = (root, {
    firstName, lastName, email, password, address1, address2, country, state, postcode, phone, created, admin
}) = > {
    var newUser = new user({
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
        created: Date,
        admin: Boolean
    });
    return new Promise((resolve, reject) = > {
        newUser.save((err, res) = > {
            err ? reject(err) : resolve(res);
        });
    });
}
module.exports.updateUser = (root, {
    id, firstName, lastName, email, password, address1, address2, country, state, postcode, phone, created, admin
}) = > {
    var updateUser = {
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
        created: Date,
        admin: Boolean
    };
    return new Promise((resolve, reject) = > {
        user.findOneAndUpdate({
            id: id
        }, {
            $set: updateUser
        }, {
            returnNewDocument: true
        }).exec((err, res) = > {
            err ? reject(err) : resolve(res);
        });
    });
}*/