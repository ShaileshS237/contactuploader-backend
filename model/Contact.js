const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const contactdetailsSchema = new Schema({
	name: String,
	phone: String,
	email: String,
	linkedprofile: String,
});

const contact = mongoose.model("contact", contactdetailsSchema);

module.exports = contact;
