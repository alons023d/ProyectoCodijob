"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const persona_1 = require("../controllers/persona");
exports.router_persona = express_1.Router();
exports.router_persona.post('/persona/create', persona_1.controller_persona.create);
