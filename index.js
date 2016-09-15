var express = require("express");
var rotas = require("./rotas").initRotas;

var app = express();

rotas(app);

app.listen(9099);
