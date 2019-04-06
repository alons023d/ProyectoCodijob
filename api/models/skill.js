"use strict";
// definiendo el modelo
// sequelize => la conexión a la base de datos
Object.defineProperty(exports, "__esModule", { value: true });
exports.skill_model = (sequelize, type) => {
    var skill_model = sequelize.define('t_skill', {
        skill_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        skill_nom: {
            type: type.STRING,
            allowNull: true // No nulo
        },
        skill_desc: {
            type: type.STRING,
            allowNull: true // No nulo
        },
        skill_img: {
            type: type.STRING,
            allowNull: true // No nulo
        }
    }, {
        timestamps: true,
        tableName: 't_skill',
    });
    return skill_model;
};
