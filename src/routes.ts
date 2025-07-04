import { Router } from "express"

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { SeedController } from "./controllers/seed/SeedController";

const router = Router();

//--ROTAS USER --
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)

//--ROTA PARA POPULAR O BANCO COM DADOS FAKES --
router.get('/seed', isAuthenticated, new SeedController().handle);


export { router };