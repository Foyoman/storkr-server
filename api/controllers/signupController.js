const mongoose = require('mongoose');
const Signup = mongoose.model('Signup');

exports.listAllSignups = (req, res) => {
	Signup.find({}, (err, signups) => {
		if (err) res.send(err);
		res.json(signups);
	});
};

exports.createSignup = (req, res) => {
	const newSignup = new Signup(req.body);
	newSignup.save((err, signup) => {
		if (err) res.send(err);
		res.json(signup);
	});
};

exports.readSignup = (req, res) => {
	Signup.findById(req.params.signupId, (err, signup) => {
		if (err) res.send(err);
		res.json(signup);
	});
};

exports.updateSignup = (req, res) => {
	Signup.findOneAndUpdate(
		{ _id: req.params.signupId },
		req.body,
		{ new: true },
		(err, signup) => {
			if (err) res.send(err);
			res.json(signup)
		}
	);
};

exports.deleteSignup = (req, res) => {
	Signup.deleteOne({_id: req.params.signupID}, (err) => {
		if (err) res.send(res);
		res.json({
			message: 'Signup deleted successfully',
			_id: req.params.signupId
		});
	})
};