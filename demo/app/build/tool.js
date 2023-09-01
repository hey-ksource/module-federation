const path = require('path');
module.exports = {
  resolvePath: function (filePath) {
    return path.resolve(__dirname, '..', filePath);
  },

	getArg: function(key) {
		const arg = process.argv.find((arg) => arg.split('=')[0] === key);
		return arg ? arg.split('=')[1] : '';
	}
};
