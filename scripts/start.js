var bs = require('browser-sync').create();
var bodyParser = require('body-parser');
var url = require('url');
var dataProducts = require('../data');
var exec = require('child_process').exec;
var fs = require('fs-extra');
var watch = require('node-watch');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('../webpack.config');
var bsConfg = {
  open: false,
  server: {
    /*
    * Les repertoires de bases à exécuter, peut-être un array
    */
    baseDir: './dist',
    /*
    *  le point d'entré de l'application
    */
    index: 'index.html',
    /*
    *  les routes vers les ressources statiques
    */
    routes: {
      '/node_modules': 'node_modules',
      '/bower_components': 'bower_components'
    },
    /*
    *  middleware gérant les ressources serveur dynamiques json ...
    */
    middleware: [bodyParser.urlencoded({ extended: true }), function(req, res, next) {
      var parsed = url.parse(req.url);
      if (parsed.pathname.match(/\/api\/products/)) {
        res.setHeader('Content-Type', 'application/json');
        switch (req.method) {
          case 'POST':
          dataProducts.push(req.body);
          // fall through
          case 'GET':
          res.end(JSON.stringify(dataProducts));
          break;
          default:
          next();
        }
      } else {
        next();
      }
    }]
  }
};

fs.copySync(
  path.join(__dirname, '../src/', 'index.html'),
  path.join(__dirname, '../dist/', 'index.html')
);
fs.copySync(
  path.join(__dirname, '../src/', 'app.css'),
  path.join(__dirname, '../dist/', 'app.css')
);

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  proxy: {
    '*': 'http://localhost:3000'
  }
}).listen(8080, 'localhost', function(err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at http://localhost:8080/');
  // Start Browsersync
  bs.init(bsConfg);
});
