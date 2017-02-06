var express = require('express')
, app = express(); 
/*
 * GET home page.
 */
/*
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
*/

app.get('/', function(req, res) {
	res.render('index', {title: 'Express'});
	
});