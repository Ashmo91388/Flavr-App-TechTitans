const jwt = require("jsonwebtoken");

require("dotenv").config();

//const secret = process.env.APP_SECRET;
//const expiration = process.env.AUTH_EXPIRATION;
const secret = process.env.APP_SECRET;
const expiration = process.env.AUTH_EXPIRATION;

module.exports = {
  authMiddleware({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch (error) {
      console.error("Invalid token", error);
    }

    return req;
  },
  signToken({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
}; 