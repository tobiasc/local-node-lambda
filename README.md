Local-Node-Lambda
============

Local-Node-Lambda lets you run Amazon Lambda functions locally. You can run them from the command line or integrate calls within a regular Node.js script, e.g. to use in unit testing or simply as part of a regular application.


Install
----------
```bash
# For command line use
npm install -g local-node-lambda
```

```bash
# For Node.js use
npm install local-node-lambda
```

Usage
----------

```js
# Run from Node.js
var localNodeLambda = require('local-node-lambda');

localNodeLambda.invoke(<eventObj>, <path>, <handler>, <timeout>, function (err, message) {
	if (err) {
		console.log(err);
	} else {
		console.log(message);
	}
	process.exit();
});
```

```bash
# Run from command line
local-node-lambda
```

Command Line Help
----------
#### Parameters
*    -p, --path [Lambda file name] Specify Lambda function file name. Default is "./index"
*    -e, --eventPath [Event data file name] Specify event data file name. Default is "{}"
*    -h, --handler [Lambda handler name] Lambda handler name. Default is "handler".
*    -t, --timeout [Timeout seconds] Seconds until the Lambda function times out. Default is 3 seconds.

#### Event data
From the regular node execution you can pass in a JSON object as the event object, while from the command line you can pass in a js file that exports a JSON object.

```js
# Command line sample event
module.exports = {
	hello: "world"
};
```

Inspiration
----------
* https://github.com/ashiina/lambda-local
* https://github.com/RebelMail/node-lambda


License
----------
This library is released under the MIT license.

