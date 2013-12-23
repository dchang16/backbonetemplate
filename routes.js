var passport = require('passport'),
    Account = require('./models/account');
module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('index');
    });

};
