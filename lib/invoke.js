var utils = require('./utils.js');

/*
 * exports
 */
module.exports = function (eventObj, path, handler, timeout, callback) {

	// default event
	if (!eventObj) {
		eventObj = {};
	}

	// default path
	if (!path) {
		path = "./index";
	}

	// default handler name
	if (!handler) {
		handler = "handler";
	}

	// default timeout
	if (!timeout) {
		timeout = 3000;
	} else {
		timeout = timeout * 1000;
	}

	// load lambda function
	var lambdaAbsolutePath = utils.getAbsolutePath(path);
	var lambdaFunc = require(lambdaAbsolutePath);

	// load context
	var context = require('./context.js');

	var timeoutReached = false;
	setTimeout(function(){
		timeoutReached = true;
		callback(new Error("Task timed out after " + (timeout / 1000).toFixed(2) + " seconds"));
	}, timeout); 

	context.setCallback(function (err, message) {
		if (!timeoutReached) {
			callback(err, message);
		}
	});

	// execute lambda function
	if (lambdaFunc[handler]) {
		lambdaFunc[handler](eventObj, context);
	} else {
		callback(new Error('Could not find Lambda handler'));
	}
};
