const fs = require("fs-extra");

// utils
const parseEngine = require("./utils/engine");

// params 	: <string> json file path
// returns	: <promise> a json format text
// type 	: async
const parseJsonFile = async (filePath) => {
	if (!filePath.endsWith(".json"))
		return JSON.stringify({ message: "Please give JSON file" });

	try {
		const data = await fs.readJson(filePath);

		const message = parseEngine(data);

		return JSON.stringify({ message });
	} catch (error) {
		return JSON.stringify({ message: error.message });
	}
};

// params 	: <string> a json sting
// returns	: <string> a json format text
// type 	: sync
const parseJsonString = (jsonData) => {
	try {
		const data = JSON.parse(jsonData);

		const message = parseEngine(data);

		return JSON.stringify({ message });
	} catch (error) {
		return JSON.stringify({ message: error.message });
	}
};

module.exports = { parseJsonString, parseJsonFile };
