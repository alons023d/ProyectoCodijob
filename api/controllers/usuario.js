"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../config/sequelize");
const sequelize_2 = require("../config/sequelize");
var jwt = require('jsonwebtoken');
exports.controller_usuario = {
    create: (req, res) => {
        let per_id = req.params.per_id;
        var objUsuario = sequelize_1.Usuario.build(req.body);
        sequelize_2.Persona.findById(per_id).then((persona) => {
            if (persona) {
                objUsuario.per_id = req.params.per_id;
                objUsuario.setPassword(req.body.password);
                return objUsuario.save();
            }
        }).then((usuarioCreado) => {
            return usuarioCreado.generateJWT();
        }).then((token) => {
            let response = {
                message: 'created',
                content: objUsuario,
                token: token
            };
            res.status(201).send(response);
        });
    },
    privado: (req, res) => {
        jwt.verify(req.token, 'sape', (err, payload) => {
            if (err) {
                res.status(403).send(err);
            }
            else {
                let response = {
                    message: "validado",
                    content: payload
                };
                res.status(200).send(response);
            }
        });
    }
};
