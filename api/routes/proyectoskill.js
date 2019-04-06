"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proyectoskill_1 = require("../controllers/proyectoskill");
exports.router_proyectoskill = express_1.Router();
exports.router_proyectoskill.post('/proyectoskill/create', proyectoskill_1.controller_proyectoskill.create);
exports.router_proyectoskill.get('/proyectoskill/proyecto/:pro_id/skills', proyectoskill_1.controller_proyectoskill.getSkillsByProyectoId);
