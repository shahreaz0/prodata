const router = require("express").Router();
const fs = require("fs-extra");

// configs
const upload = require("../configs/multer");

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
router.post("/parse", upload.single("jsonFile"), async (req, res) => {
	try {
		const data = await fs.readJson(req.file.path);

		console.log(data);

		await fs.remove(req.file.path);

		res.send({ message: "successful" });
	} catch (error) {
		console.error(error);
	}
});

module.exports = router;
