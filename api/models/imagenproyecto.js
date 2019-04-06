"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagenproyecto_model = (sequelize, type) => {
    return sequelize.define('t_imagenproyecto', {
        imgpro_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        imgpro_img: {
            type: type.STRING(100),
            allowNull: true
        }
    }, {
        timestamps: true,
        tableName: 't_imagenproyecto'
    });
};
