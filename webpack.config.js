const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	target: 'node',
	externals: [nodeExternals()],
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve('dist',)
	},

	module: {
		rules: [
		  {
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: 'babel-loader',
		  },
		],
	  },
}
