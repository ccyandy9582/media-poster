const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';

module.exports = {
	entry     : path.join(__dirname, 'src/index.jsx'),
	output    : {
		path     : path.resolve(__dirname, 'dist'),
		filename : 'index.[hash].bundle.js',
		clean    : true
	},
	devServer : {
		contentBase : path.join(__dirname, 'public'),
		hot         : true,
		port        : 4000
	},
	module    : {
		rules : [
			{
				test : /\.css$/i,
				use  : [ MiniCssExtractPlugin.loader, 'css-loader' ]
			},
			{
				test    : /\.(js|jsx)$/,
				exclude : /node_modules/,
				use     : {
					loader : 'babel-loader'
				}
			},
			{
				test : /\.(png|gif)/,
				type : 'asset/resource'
			},
			{
				test : /\.s[ac]ss$/i,
				use  : [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
			}
		]
	},
	devtool   : 'inline-source-map',
	plugins   : [
		new HtmlWebpackPlugin({
			template : './public/index.html'
		}),
		new MiniCssExtractPlugin({
			filename : 'main.[hash].css'
		})
	],
	mode      : mode,
	resolve   : {
		extensions : [ '.js', '.jsx', '.json, tsx, ts' ],
		mainFiles  : [ 'index' ],
		fallback: {
			util: require.resolve("util/"),
			crypto: require.resolve("crypto-browserify"),
			https: require.resolve("https-browserify"),
			http: require.resolve("http-browserify")
		}
	},
	performance: {
		maxEntrypointSize: 40000,
	},
};
