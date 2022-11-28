const loginValidate = require('../../validation/loginValidate');
const { checkUserQuery } = require('../../database/queries');
const { sendTokens, comparePasswords } = require('../../utils');

const login = (req, res) => {
  const { email, password } = req.body;
  loginValidate(req.body).then(() => {
    checkUserQuery(email).then((result) => {
      if (result.rows[0]) {
        comparePasswords(password, result.rows[0].password).then((value) => {
          if (value) sendTokens(res, { id: result.rows[0].id, email: result.rows[0].email });
          else res.json({ message: 'Wrong Password' });
        }).catch((err) => res.json({ message: err }));
      } else res.json({ message: 'This email hasn\'t registered yet' });
    }).catch((err) => res.json({ message: err }));
  }).catch((err) => {
    const errorList = [];
    err.details.forEach((error) => {
      errorList.push([error.message]);
    });
    res.json({ message: errorList });
  });
};

module.exports = login;
