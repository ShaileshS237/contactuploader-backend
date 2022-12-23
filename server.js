const express = require("express");
const serverless = require("serverless-http");
const app = express();
const mongoose = require("mongoose");
const http = require("http").createServer(app);
const Contact = require("./model/Contact");
// mongodb+srv://shailesh:Shadip@143@cluster0.83bx4zf.mongodb.net/demo?retryWrites=true&w=majority
const PORT = process.env.PORT || 5000;
require("./DB/conn");
// app.use(express.static(__dirname + "/public"));
app.use(express.json());
const Schema = mongoose.Schema;
app.use(require("./router/auth"));

app.post("/upload", async (req, res) => {
	Contact.insertMany(req.body, { ordered: true })
		.then((val) => {
			res.status(200).json("Uploaded Succesfully");
		})
		.catch((error) => {
			console.log(error);
		});
});

http.listen(PORT, () => {
	console.log(`listing to PORT ${PORT}`);
});
