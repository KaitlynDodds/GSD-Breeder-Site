const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './frontend/src/index.js',
	output: {
		path: path.join(__dirname, 'frontend/dist/build'),
		filename: 'javascripts-[hash].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
		        test: /\.html$/,
		        use: [
		          {
		            loader: "html-loader",
		            options: { minimize: true }
		          }
		        ]
		    },
		    {
		    	test: /\.css$/,
		    	use: [
		    		{
		    			loader: "style-loader"
		    		}
		    	]
		    },
		    {
		    	test: /\.css$/,
		    	use: [
		    		{
		    			loader: "css-loader",
		    			query: {
						    modules: true,
						    localIdentName: '[name]__[local]___[hash:base64:5]'
						}
		    		}
		    	]
		    }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
	      template: "./frontend/src/index.html",
	      filename: "./index.html"
	    })
	]
};