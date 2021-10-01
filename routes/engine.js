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
		// read data from json
		const data = await fs.readJson(req.file.path);

		// variables
		let message = [];
		let verdict;

		// parse data and make send object
		data.nodes.forEach((node, index) => {
			verdict = node.conditions.every((condition) => {
				if (condition.operator === ">=") {
					return data.parameters[condition.name] >= condition.value;
				} else if (condition.operator === ">") {
					return data.parameters[condition.name] > condition.value;
				} else if (condition.operator === "<") {
					return data.parameters[condition.name] < condition.value;
				} else if (condition.operator === "<=") {
					return data.parameters[condition.name] <= condition.value;
				} else if (condition.operator === "==") {
					return data.parameters[condition.name] == condition.value;
				}
			});
			message.push({ node: index + 1, result: verdict });
		});

		// remove json file
		await fs.remove(req.file.path);
		// send respone
		res.send({ message });
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
});

module.exports = router;
