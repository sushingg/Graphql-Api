import jwt from 'jsonwebtoken';
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YmQ3NjRhYTcwMzgzMDA2ZDQxMTA5Y2QiLCJlbWFpbCI6InNoaW5Ac2hpbi5jaCIsImFkbWluIjp0cnVlLCJleHBpcmVzSW4iOiIyaCIsImlhdCI6MTU0MDkyMjExNX0._02l9AIj7l8YMrhmp9A6_AxIPDMP9JXzmCl6hZkMhlc"

var decoded = jwt.verify(token, 'secretshin');
console.log(decoded) // bar