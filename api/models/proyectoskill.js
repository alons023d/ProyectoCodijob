"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proyectoskill_model = (sequelize, type) => {
    return sequelize.define('t_proyectoskill', {
        proskill_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        }
    }, {
        timestamps: true,
        tableName: 't_proyectoskill'
    });
};
