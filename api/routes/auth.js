"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
exports.router_auth = express_1.Router();
exports.router_auth.post('/auth/registrar', auth_1.controller_auth.registrar);
exports.router_auth.post('/auth/login', auth_1.controller_auth.login);
