## **How to run this project?**

 1. If NodeJS not installed in your system. Install it from <a href="https://nodejs.org/en/download/" target="_blank">Here</a>.
 2. Clone the repository.
 3. Run command `npm i` in root folder to install dependencies.
 4. Run command `npm run dev` in the root folder to start the server.
 5. Go to the `http://localhost:3000`.
 6. That's it.

## API endpoints 
Development server `http://localhost:3000`

**Engine routes**
|Method | Route | Description | Access |
| --|--|--|--|
| GET |/api/ | Home route | Public |
| POST |/api/parse | JSON data parser route | Public |



## Inputs & Outputs
*The input files are from [here](https://gist.github.com/ronakjain90/7ce135feada1f093c54ffde1370a9982)*

**First input file**  `1.json`
**The output**

    {
    	"message": [
    		{ 
    			"node": 1,
    			"result": true
    		}
    	]
    }

**Second input file**  `2.json`
**The output**

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

