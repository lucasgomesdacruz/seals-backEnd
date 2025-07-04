"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const SeedController_1 = require("./controllers/seed/SeedController");
const router = (0, express_1.Router)();
exports.router = router;
//--ROTAS USER --
router.post('/users', new CreateUserController_1.CreateUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/me', isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailUserController().handle);
//--ROTA PARA POPULAR O BANCO COM DADOS FAKES --
router.get('/seed', isAuthenticated_1.isAuthenticated, new SeedController_1.SeedController().handle);
