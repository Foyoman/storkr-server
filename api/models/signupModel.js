const mongoose = require('mongoose');

const { Schema } = mongoose;

const SignupSchema = new Schema(
	{
		firstName: {
			type: String,
			required: 'First name cannot be blank'
		},

		lastName: {
			type: String,
			required: 'Last name cannot be blank'
		},

		email: {
			type: String,
			required: 'Email cannot be blank'
		},

		babies: {
			type: Number,
			required: 'Babies cannot be blank'
		}
	},
	{ collection: 'signup' }
);

module.exports = mongoose.model('Signup', SignupSchema);