const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("../DB/conn");
const User = require("../model/User");
router.get("/", (req, res) => {
	res.send(`hello world from the server `);
});

router.post("/login", async (req, res) => {
	console.log(req.body);
	let token;
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({ error: "Please filled the data" });
		}
		const userLogin = await User.findOne({ email: email });
		if (!userLogin) {
			res.status(422).json({ error: "User Not Found" });
		} else if (userLogin.password != password) {
			res.status(422).json({ error: "password not match" });
		} else {
			token = await userLogin.generateToken();
			console.log(token);
			res.cookie("jwtoken", token, {
				expires: new Date(Date.now() + 25892000000),
				httpOnly: true,
			});
			res.json({ message: "Login successfully" });
		}
	} catch (error) {
		console.log(error);
	}
});

router.post("/register", (req, res) => {
	console.log(req.body);
	const { name, mobile, email, password } = req.body;

	if (!name || !email || !mobile || !password) {
		return res.status(422).json({ message: "please filled all the data" });
	}
	User.findOne({ email: email })
		.then((userExist) => {
			if (userExist) {
				return res.status(422).json({ message: "email already exist" });
			}
			const user = new User({
				name: name,
				email: email,
				password: password,
				mobile: mobile,
			});
			user
				.save()
				.then(() => {
					res.status(201).json({ message: "Successfully Registerd" });
				})
				.catch((err) => res.status(500).json({ error: "Failed to register" }));
		})
		.catch((err) => console.log(err));
});

module.exports = router;
