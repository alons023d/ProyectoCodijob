"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proyecto_model = (sequelize, type) => {
    return sequelize.define('t_proyecto', {
        pro_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        pro_nom: {
            type: type.STRING(100),
            allowNull: true
        },
        pro_desc: {
            type: type.TEXT,
            allowNull: true
        },
        pro_fechin: {
            type: type.DATE,
            allowNull: true
        },
        pro_fechfin: {
            type: type.DATE,
            allowNull: true
        }
    }, {
        timestamps: true,
        tableName: 't_proyecto'
    });
};
