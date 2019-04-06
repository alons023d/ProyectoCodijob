"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../config/sequelize");
const sequelize_2 = require("../config/sequelize");
const sequelize_3 = require("../config/sequelize");
// forma 1 METODO GET
// ruta => /api/:parametro/ruta
// ejm => /api/1/ruta
// req.params.paremetro
// forma 2 METODO GET
// ruta => /api/ruta
// ejm => /api/ruta?parametro=8
// req.query.parametro
exports.controller_proyectoskill = {
    create: (req, res) => {
        sequelize_2.Skill.findById(req.body.skill_id).then((skill) => {
            if (skill != null) {
                return sequelize_3.Proyecto.findById(req.body.pro_id);
            }
            else {
                console.log("error con el skill");
                let response = {
                    message: "error",
                    content: "El Skill no existe"
                };
                res.status(500).send(response);
                throw ("ERROR => El Skill no existe");
            }
        }).then((proyecto) => {
            if (proyecto != null) {
                return sequelize_1.ProyectoSkill.create(req.body);
            }
            else {
                console.log("error con el proyecto");
                let response = {
                    message: "error",
                    content: "El Skill existe, pero el Proyeto, no"
                };
                res.status(500).send(response);
                throw ("ERROR => El Proyecto no existe");
            }
        }).then((proyectoSkillCreado) => {
            if (proyectoSkillCreado != null) {
                let response = {
                    message: "created",
                    content: proyectoSkillCreado
                };
                res.status(201).send(response);
            }
            else {
                console.log("error con el proyectoskill");
                let response = {
                    message: "error",
                    content: "Error al crear el Proyecto Skill"
                };
                res.status(500).send(response);
                throw ("ERROR => No se pudo crear el Proyecto Skill");
            }
        }).catch((error) => {
            console.log("ERROR => ", error);
        });
    },
    getSkillsByProyectoId: (req, res) => {
        sequelize_1.ProyectoSkill.findAll({
            include: [{
                    model: sequelize_2.Skill,
                    attributes: ['skill_nom', 'skill_desc']
                }, {
                    model: sequelize_3.Proyecto
                }],
            where: {
                pro_id: req.params.pro_id
            }
        }).then((response) => {
            res.send(response);
        });
    }
};
