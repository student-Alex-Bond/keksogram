const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: 'development',
	entry:  './src/app.ts',
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
		port: 3001,
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		assetModuleFilename: 'assets/[hash][ext][query]'
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Development',
			template: "./src/index.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules|\.d\.ts$/,
			},
			{
				test: /\.d\.ts$/,
				loader: 'ignore-loader'
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'img/[hash][ext][query]'
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/fonts/[hash][ext][query]'
				}
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
