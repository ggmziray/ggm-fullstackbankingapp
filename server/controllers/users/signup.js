const signupValidate = require('../../validation/signupValidate');
const { addUserQuery, checkUserQuery } = require('../../database/queries');
const { sendTokens, hashPassword } = require('../../utils');

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const { error } = signupValidate(req.body);
    if (error) res.json({ message: error.details.filter((err) => err.message) });
    else {
      const hashedPassword = await hashPassword(password);
      const user = await checkUserQuery(email);
      if (!user.rows[0]) {
        const addedUser = await addUserQuery(name, email, hashedPassword);
        if (addedUser) {
          const data = await checkUserQuery(email);
          sendTokens(res, { id: data.rows[0].id, email: data.rows[0].email });
        }
      } else res.json({ message: [{ message: 'This email has already registered' }] });
    }
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = signup;
