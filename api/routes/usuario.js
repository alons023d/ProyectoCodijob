"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../controllers/usuario");
exports.router_usuario = express_1.Router();
var verificar = (req, res, next) => {
    console.log(req.headers);
    const bearerHeader = req.headers["authorization"];
    console.log(bearerHeader);
    if (typeof bearerHeader !== 'undefined') {
        const token = bearerHeader.split(" ")[1];
        req.token = token;
        next();
    }
    else {
        res.status(403).send("PROHIBIDO");
    }
};
exports.router_usuario.post('/usuario/create/:per_id', usuario_1.controller_usuario.create);
exports.router_usuario.post('/usuario/privado', verificar, usuario_1.controller_usuario.privado);
