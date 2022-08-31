const signupBuilder = require('../controllers/signupController');

module.exports = (app) => {
	app.route('/signups')
		.get(signupBuilder.listAllSignups)
		.post(signupBuilder.createSignup);

	app.route('/signups/:signupId')
		.get(signupBuilder.readSignup)
		.put(signupBuilder.updateSignup)
		.delete(signupBuilder.deleteSignup);
}