const router = require("express").Router();

// routes 	GET /api/
// desc 	The home route
// access 	public
router.get("/", (req, res) => {
	res.send({
		message: "API is up and running",
		url: req.url,
		method: req.method,
	});
});

// routes 	POST /api/parse
// desc 	the json data parser
// access 	public
router.post("/parse", (req, res) => {
	res.send({ message: "The json data parser" });
});

module.exports = router;
