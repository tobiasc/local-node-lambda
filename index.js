var invoke = require('./lib/invoke.js');

function localNodeLambda () {};

localNodeLambda.invoke = invoke;

module.exports = localNodeLambda;
