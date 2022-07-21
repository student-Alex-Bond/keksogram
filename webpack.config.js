const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: 'development',
	entry: './src/app.ts',
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
		port: 3001,
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Development',
			template: "./src/index.html"
		}),
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	optimization: {
		runtimeChunk: 'single',
	},
};
