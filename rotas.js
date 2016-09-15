var modeloFn = require("./modelo").fn;
var modeloStr = require("./modelo").str;
var modeloStr2 = require("./modelo").str2;


var oifn = function(a) {
    console.log(a);
    return function(req, resp) {
        resp.json(modeloFn());
    }
};

exports.initRotas = function(app) { 
    app.get("/api/oi", oifn("teste"));

    app.get("/api/oi/str", (req, resp) => resp.send(modeloStr));

    app.get("/api/teste", (req, resp) => resp.send("teste"));

    app.get("/api/oi/str2", function(req, resp) {
        resp.send(modeloStr2);
    });
};