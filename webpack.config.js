var config = {
   entry: './main.js',
	
   output: {
      path:'/',
      filename: 'app.js',
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },
   // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
    watch: true
}

module.exports = config;