const mongoose = require("mongoose");

const DB =
	"mongodb+srv://shailesh:gCGtFPod0TfjuIeF@cluster0.83bx4zf.mongodb.net/demo?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log(`connection successful`);
	})
	.catch((err) => {
		console.log(err, "no connection");
	});
