"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importando las rutas de SKILL
const skill_1 = require("./api/routes/skill");
const home_1 = require("./api/routes/home");
const proyecto_1 = require("./api/routes/proyecto");
const proyectoskill_1 = require("./api/routes/proyectoskill");
const persona_1 = require("./api/routes/persona");
const usuario_1 = require("./api/routes/usuario");
const auth_1 = require("./api/routes/auth");
// Importamos la libreria desde node_modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
// inicialización del puerto
const PUERTO = process.env.PORT || 3700;
// use => settea configuraciones de rutas, middlewares, cors, etc.
app.use('/api', skill_1.router_skill);
app.use('/api', home_1.router_home);
app.use('/api', proyecto_1.router_proyecto);
app.use('/api', proyectoskill_1.router_proyectoskill);
app.use('/api', persona_1.router_persona);
app.use('/api', usuario_1.router_usuario);
app.use('/api', auth_1.router_auth);
// listen => lanza o ejecuta el servidor WEB
app.listen(PUERTO, () => {
    console.log("Servidor corriendo perfectamente => localhost:3700");
});
