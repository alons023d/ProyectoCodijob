"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioempresa_model = (sequelize, type) => {
    return sequelize.define('t_usuarioempresa', {
        usuemp_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        usuemp_cargo: {
            type: type.STRING(50),
            allowNull: true
        },
        usuemp_fechin: {
            type: type.DATE,
            allowNull: true
        },
        usuemp_fechfin: {
            type: type.DATE,
            allowNull: true
        },
        usuemp_desc: {
            type: type.TEXT,
            allowNull: true
        }
    }, {
        timestamps: true,
        tableName: 't_usuarioempresa'
    });
};
