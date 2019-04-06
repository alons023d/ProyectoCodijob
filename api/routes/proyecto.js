"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proyecto_1 = require("../controllers/proyecto");
exports.router_proyecto = express_1.Router();
exports.router_proyecto.post('/proyecto/create', proyecto_1.controller_proyecto.create);
