"use strict";
import fs from 'fs';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import utils from'./utils.js';
const app = express();

const PRODUCT_FILE = path.join(__dirname, 'products.json');
let shopping_bag = [];

app.set('port', 3001);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api',(req, res) => {
    fs.readFile(PRODUCT_FILE,(err, data) => {
        if(err) {
            console.error(err);
            process.exit(1);
        }
        data = (JSON.parse(data));
        res.json(data);
    });
});

app.post('/api',(req,res) => {
        fs.readFile(PRODUCT_FILE,(err, data) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            shopping_bag = utils.getBag(req.body.item, shopping_bag, data);
            res.json(shopping_bag);
        });
});

app.get('/api/shoppingbag',(req, res) => {
    res.json(shopping_bag);
});

app.post('/api/shoppingbag',(req, res) => {
    shopping_bag = utils.delBag(req.body.item, shopping_bag);
    res.json(shopping_bag);

});

app.listen(app.get('port'),() => {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});