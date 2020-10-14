const jwt = require("jsonwebtoken");
const secret_key = "mawarbodas";

module.exports = {
  generateToken: async (payload) => {
    const token = await jwt.sign(payload, secret_key);
    return token;
  },
  credentialCheck: async (req, res, next) => {
    try {
    } catch (error) {
      res.status(404).json({});
    }
  },
};
