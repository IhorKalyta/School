const jwt = require('jsonwebtoken');

exports.createAuthorizationToken = (req, res) => {
	const { name } = req.body;
	const token = jwt.sign({ username: name }, process.env.JWT_SECRET, { expiresIn: '3600s' });

	res.json({ token });
};
