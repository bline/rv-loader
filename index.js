/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Scott Beck (@bline)
*/
var path = require("path");
var loaderUtils = require("loader-utils");
module.exports = function(source) {
	this.cacheable && this.cacheable();
	var ractive = require("ractive");
	var query = loaderUtils.parseQuery(this.query);
	var tmplArray = ractive.parse(source, {
    preserveWhitespace: query.preserveWhitespace || false,
    sanitize: query.sanitize || false
	});
	var debugSource = "";
	if(this.debug) {
    var req = loaderUtils.getRemainingRequest(this).replace(/^!/, "");
		debugSource = "require(" + JSON.stringify(path.join(__dirname, "web_modules", "fs")) + ").setFile(" + JSON.stringify(req) + ", " + JSON.stringify(source) + ");\n";
	}
	return runtime + debugSource + "module.exports = " + JSON.stringify(tmplArray);
}
module.exports.seperable = true;
