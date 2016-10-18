var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var utils = require('./utils.js');
var app = express();

var PRODUCT_FILE = path.join(__dirname, 'products.json');
var shopping_bag = [];

app.set('port', (process.env.PORT || 3001));

//app.use('/', express.static(path.join(__dirname, 'views')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api', function(req, res) {
    fs.readFile(PRODUCT_FILE, function(err, data) {
        if(err) {
            console.error(err);
            process.exit(1);
        }
        data = (JSON.parse(data));
        res.json(data);
    });
});

app.post('/api', function(req,res) {
        fs.readFile(PRODUCT_FILE, function (err, data) {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            shopping_bag = utils.getBag(req.body.item, shopping_bag, data);
            res.json(shopping_bag);
        });
});

app.get('/api/shoppingbag', function(req, res) {
    res.json(shopping_bag);
});

app.post('/api/shoppingbag', function(req, res) {
    shopping_bag = utils.delBag(req.body.item, shopping_bag);
    res.json(shopping_bag);

});

app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});