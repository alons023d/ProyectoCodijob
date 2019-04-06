"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empresa_model = (sequelize, type) => {
    return sequelize.define('t_empresa', {
        emp_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        emp_nom: {
            type: type.STRING(50),
            allowNull: true
        },
        emp_img: {
            type: type.STRING(100),
            allowNull: true
        }
    }, {
        timestamps: true,
        tableName: 't_empresa'
    });
};
