"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import {controller_home} from '../controllers/home';
var controller_home = require('../controllers/home');
// Hacemos el enrutador exportable
//para que el index.ts pueda importarlo
exports.router_home = express_1.Router();
const sequelize_1 = require("../config/sequelize");
const sequelize_2 = require("../config/sequelize");
// GET es el verbo HTTP que va a escuchar nuestro server
//request => los datos que el servidor recibe de quien lo invoca
//response => objeto de respuesta a quien invoca la ruta
exports.router_home.get('/', controller_home.home);
exports.router_home.get('/consulta', (req, res) => {
    let query = sequelize_1.ProyectoSkill.findAll({
        include: [
            {
                model: sequelize_2.Proyecto
            }
        ]
    });
    query.then((proyectos) => {
        res.send(proyectos);
    });
});
exports.router_home.get('/otraruta', controller_home.otraruta);
// esta es otra forma de exportar variables en NODE
// module.exports = router;
