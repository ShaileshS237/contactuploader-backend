const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	mobile: {
		type: Number,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	tokens: [
		{
			token: {
				type: String,
				required: true,
			},
		},
	],
});

userSchema.methods.generateToken = async function () {
	try {
		let token = jwt.sign({ _id: this._id }, "e5FSkAFpf8HvNpMJRuAZaxx2ZMLBu78A");
		this.tokens = this.tokens.concat({ token: token });
		await this.save();
		return token;
	} catch (error) {
		console.log(error);
	}
};

module.exports = mongoose.model("User", userSchema);
