const router = require('express').Router();

router.get('/', (req, res) => {
	res.json({
		status: 'API Its Working',
		message: 'Welcome to School!',
	});
});

module.exports = router;
