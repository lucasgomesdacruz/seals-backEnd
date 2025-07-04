"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedController = void 0;
const SeedService_1 = require("../../services/seed/SeedService");
class SeedController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const seedService = new SeedService_1.SeedService();
                const vesselsData = yield seedService.execute();
                return res.json({ message: "Seed criada com sucesso!", data: vesselsData });
            }
            catch (error) {
                console.error("Erro ao criar seed:", error);
                return res.status(500).json({ error: "Erro ao criar seed." });
            }
        });
    }
}
exports.SeedController = SeedController;
