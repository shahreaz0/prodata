const express = require("express");

// express configs
const app = express();

// routes
app.get("/", (req, res) => {
	console.log();
	res.send({
		message: "API is up and running",
		url: req.url,
		method: req.method,
	});
});

// server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
