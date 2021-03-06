/**
 * Module dependencies.
 */
var express = require('express'),
    http = require('http'),
    https = require('https'),
    path = require('path'),
    fs = require('fs');

/**
 * Express
 */
var app = express();
/**
 *
 */
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);


/**
 * Static resource
 */
app.use(function (req, res, next) {
    'use strict';
    res.setHeader('Expires', 'Fri, 30 Oct 2014 14:19:41 GMT');
    res.setHeader('Last-Modified', 'Fri, 30 Oct 1998 14:19:41 GMT');
    next();
});
var coreAssets = __dirname + '/app';
app.use(express.static(coreAssets));
/**
 * Start Server
 */
app.get('/checkPrice', function(request, response){
    var bananaType = request.query.bananaType;
    var prices  =  require('./prices');
    response.json({
        price: prices[bananaType]

    });
    });


app.listen(8080, function () {
    'use strict';
    console.log('Listening on port ' + 8080);
});
