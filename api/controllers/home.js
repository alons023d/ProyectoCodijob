"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_home = {
    home: function (req, res) {
        res.send("HOLA SOY EL SERVIDOR =)");
    },
    otraruta: function (req, res) {
        res.send("Esta es otra rut");
    }
};
// SI USAMOS 
// => module.exports = controller_home;
// En otro archivo lo importamos como:
// => var [nombre_cualquiera] = require([ruta_del_archivo]);
// SI USAMOS 
// => exports var controller_home = .....
// En otro archivo lo importamos como:
// => import {controller_home} from 'ruta_del_archivo';
module.exports = controller_home;
