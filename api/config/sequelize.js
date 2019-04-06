"use strict";
// En este archivo iré la configuración
// e inicialización , migración de nuestros modelos
// a la base de datos
// usando el principio de Code First
Object.defineProperty(exports, "__esModule", { value: true });
const skill_1 = require("../models/skill");
const proyecto_1 = require("../models/proyecto");
const proyectoskill_1 = require("../models/proyectoskill");
const usuario_1 = require("../models/usuario");
const usuarioskill_1 = require("../models/usuarioskill");
const usuarioproyecto_1 = require("../models/usuarioproyecto");
const imagenproyecto_1 = require("../models/imagenproyecto");
const empresa_1 = require("../models/empresa");
const usuarioempresa_1 = require("../models/usuarioempresa");
const persona_1 = require("../models/persona");
const Sequelize = require('sequelize');
const sequelize = new Sequelize('6Wx4EKr2M2', '6Wx4EKr2M2', 'UUu3n1IYv7', {
    host: 'remotemysql.com',
    dialect: 'mysql',
    operatorAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '-05:00'
});
exports.ImagenProyecto = imagenproyecto_1.imagenproyecto_model(sequelize, Sequelize);
exports.Proyecto = proyecto_1.proyecto_model(sequelize, Sequelize);
exports.Skill = skill_1.skill_model(sequelize, Sequelize);
exports.ProyectoSkill = proyectoskill_1.proyectoskill_model(sequelize, Sequelize);
exports.Usuario = usuario_1.usuario_model(sequelize, Sequelize);
exports.UsuarioSkill = usuarioskill_1.usuarioskill_model(sequelize, Sequelize);
exports.UsuarioProyecto = usuarioproyecto_1.usuarioproyecto_model(sequelize, Sequelize);
exports.Empresa = empresa_1.empresa_model(sequelize, Sequelize);
exports.UsuarioEmpresa = usuarioempresa_1.usuarioempresa_model(sequelize, Sequelize);
exports.Persona = persona_1.persona_model(sequelize, Sequelize);
// belongsTo crea una clave foranea
exports.ProyectoSkill.belongsTo(exports.Skill, { foreignKey: 'skill_id' });
exports.ProyectoSkill.belongsTo(exports.Proyecto, { foreignKey: 'pro_id' });
exports.UsuarioSkill.belongsTo(exports.Usuario, { foreignKey: 'usu_id' });
exports.UsuarioSkill.belongsTo(exports.Skill, { foreignKey: 'skill_id' });
exports.UsuarioProyecto.belongsTo(exports.Usuario, { foreignKey: 'usu_id' });
exports.UsuarioProyecto.belongsTo(exports.Proyecto, { foreignKey: 'pro_id' });
exports.ImagenProyecto.belongsTo(exports.Proyecto, { foreignKey: 'pro_id' });
exports.UsuarioEmpresa.belongsTo(exports.Empresa, { foreignKey: 'emp_id' });
exports.UsuarioEmpresa.belongsTo(exports.Usuario, { foreignKey: 'usu_id' });
exports.Usuario.belongsTo(exports.Persona, { foreignKey: 'per_id' });
// Para borrar tablas en cascada
// raw:true, se debe especificar cuando se hará una consulta T-SQL
sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true }).then(() => {
    // force == true: cada vez que el proyecto inicie (npm star), toda la data y tablas, se van a borrar y crear nuevamente.
    // force == false: solo va crear las tablas y/o campos que no figuren actualmente en nuestra base de datos. No se borran los datos.
    sequelize.sync({ force: false }).then(() => {
        console.log("Base de datos creada con éxito");
    }).catch(() => {
        console.log();
    });
});
// // En este archivo irá la configuración
// // e inicialización, migración de nuestros modelos
// // a la base de datos
// // usando el principio CODE FIRST
// import {skill_model} from '../models/skill';
// import {proyecto_model} from '../models/proyecto';
// import {proyectoskill_model} from '../models/proyectoskill';
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('codijob2', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
//     pool: {
//       max: 10,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     },
//     timezone: '-05:00', // for writing to database
// });
// export const Skill = skill_model(sequelize,Sequelize);
// export const Proyecto = proyecto_model(sequelize,Sequelize);
// export const ProyectoSkill = proyectoskill_model(sequelize,Sequelize);
// //ProyectoSkill.belongsTo(Skill);
// //Crea una clave foránea en la tabla ProyectoSkill de la tabla Skill
// ProyectoSkill.belongsTo(Skill,{foreignKey:'skill_id'});
// ProyectoSkill.belongsTo(Proyecto,{foreignKey:'pro_id'});
// // force => true; cada vez que el proyecto incie (npm start)
// //          toda la data y tablas, se van a borrar y crear nuevamente
// //          sin datos.
// // force => false; solo va a crear las tablas y/o campos que no figuren
// //          actualmente en nuestra base de datos
// //          los datos no se van a borrar.
// //raw:true, se debe especificar cuando se hará una consulta T-SQL
// sequelize.query('SET FOREIGN_KEY_CHECKS = 0',{raw:true}).then(()=>{
//   sequelize.sync({force:false}).then(()=>{
//     console.log("Base de datos creada con éxito");    
//   });
// });
