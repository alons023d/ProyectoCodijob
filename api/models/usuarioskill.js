"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioskill_model = (sequelize, type) => {
    return sequelize.define('t_usuarioskill', {
        ususkill_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        ususkill_lvl: {
            type: type.INTEGER,
            allowNull: true
        }
    }, {
        timestamps: true,
        tableName: 't_usuarioskill'
    });
};
