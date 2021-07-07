const path = require("path");

const config = {
	entry: ["react-hot-loader/patch", "./src/index.js"],
	output: {
		path: path.resolve("dist"),
		filename: "bundle.js"
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.(scss|sass)$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.(pdf|jpg|png|gif|svg|ico)$/,
				use: [{ loader: "url-loader" }]
			}
		]
	},
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			"react-dom": "@hot-loader/react-dom"
		}
	},
	devServer: {
		contentBase: "public",
		historyApiFallback: true
	}
};

module.exports = config;
