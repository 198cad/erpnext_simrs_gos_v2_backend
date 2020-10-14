const sqlAction = require("../configs/simrs.config");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

module.exports = {
  createUser: async (req, res) => {
    const { email, password, role } = req.body;

    let _password = await bcrypt.hashSync(password, salt);

    const _query = `
        INSERT INTO akuntansi_helper.users
        ( email, password, role)
        VALUES( '${email}', '${_password}', '${role}');
        `;
    sqlAction(_query)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  loginUser: async (req, res) => {
    const { email, password } = req.body;
  },
};
