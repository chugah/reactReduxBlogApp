var webpack = require('webpack');
// var path = require('path'); if using sass need to include path

module.exports = {
	entry: [
	'script!jquery/dist/jquery.min.js',
	'script!foundation-sites/dist/foundation.min.js',
	'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			routes: 'app/routes.jsx',
			applicationStyles: 'app/styles/app.css',
			main: 'app/components/Main',
			Navigation: 'app/components/Navigation',
			posts_index: 'app/components/posts_index',
			posts_new: 'app/components/posts_new',
			posts_show: 'app/components/posts_show',
			reducers: 'app/reducers/reducers_index',
			reducers_posts: 'app/reducers/reducers_posts',
			actions_index: 'app/actions/actions_index'					
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: 'cheap-module-eval-source-map'
};