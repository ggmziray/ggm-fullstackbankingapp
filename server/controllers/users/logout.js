const logout = (req, res) => {
  res.clearCookie('access');
  res.status(200).json({ message: 'Logged out successfully' });
};

module.exports = logout;
