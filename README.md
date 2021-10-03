## **How to run this project?**

 1. If NodeJS not installed in your system. Install it from <a href="https://nodejs.org/en/download/" target="_blank">Here</a>.
 2. Clone the repository.
 3. Run command `npm i` in root folder to install dependencies.
 4. Run command `npm run build` in the root folder to build.
 5. Run command `npm run test` in the root folder to test.
 6. That's it.

## Installation

    npm i prodata-app

**Code Sample**

    const { parseJsonFile } = require("prodata-app");
    parseJsonFile("./files/demo.json").then((res) => console.log(res));

## Inputs & Outputs

_The input files are from  [here](https://gist.github.com/ronakjain90/7ce135feada1f093c54ffde1370a9982)_

**First input file**  `1.json`  **The output**

```
{
	"message": [
		{ 
			"node": 1,
			"result": true
		}
	]
}

```

**Second input file**  `2.json`  **The output**

```
{
	"message": [
		{
			"node": 1,
			"result": false
		},
		{
			"node": 2,
			"result": false
		},
		{
			"node": 3,
			"result": true
		}
	]
}
```

## Functions
There are two functions 
 

 - `parseJsonFile`
 - `parseJsonString`

**ParseJsonFile()**

 - @params 	: String. JSON file path
 - @returns		: Promise. A JSON format text
 - @type: 		: async

**ParseJsonString()**

 - @params 	: String. JSON string
 - @returns		: String. A JSON format text
 - @type: 		: sync
