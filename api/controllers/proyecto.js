"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../config/sequelize");
exports.controller_proyecto = {
    create: (req, res) => {
        sequelize_1.Proyecto.create(req.body).then((proyectoCreado) => {
            let response = {
                message: "created",
                content: proyectoCreado
            };
            res.status(201).send(response);
        });
    },
};
