const parseEngine = (data) => {
	let message = [];
	let verdict;

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

	return message;
};

module.exports = parseEngine;
