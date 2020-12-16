import jwt from 'jsonwebtoken';

const secret = 'secret';

export const decodeToken = jwt.decode;

export const createToken = data => jwt.sign(data, secret);

export const verifyToken = (token, callback) => jwt.verify(token, secret, callback);