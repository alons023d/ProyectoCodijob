"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../config/sequelize");
exports.controller_persona = {
    create: (req, res) => {
        //creando una instancia u obj de la clase Persona
        //OJO=> Solo es instancia, no se guardó en la BD
        let objPersona = sequelize_1.Persona.build(req.body);
        console.log(objPersona);
        objPersona.saludar();
        //guardando al objeto en la BD
        objPersona.save().then((personaCreada) => {
            if (personaCreada) {
                let response = {
                    message: 'created',
                    content: personaCreada
                };
                res.status(201).send(response);
            }
            else {
                let response = {
                    message: 'error',
                    content: 'error al crear la persona'
                };
                res.status(500).send(response);
            }
        });
    },
};
