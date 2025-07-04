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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class SeedService {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            // Limpa os dados em ordem de dependência para evitar erros de FK
            yield prisma_1.default.passenger.deleteMany();
            yield prisma_1.default.duv.deleteMany();
            yield prisma_1.default.vessel.deleteMany();
            const vesselsData = [];
            for (let i = 1; i <= 10; i++) {
                const vessel = yield prisma_1.default.vessel.create({
                    data: {
                        name: `Navio ${i}`,
                        flag: `Bandeira ${i}`,
                        image: `https://picsum.photos/200/300?random=${i}`,
                        duvs: {
                            create: [
                                {
                                    number: `DUV-${i}`,
                                    travel_date: new Date(),
                                    passengers: {
                                        create: [
                                            {
                                                name: `Passageiro ${i}`,
                                                nationality: "Brasileira",
                                                photo: `https://randomuser.me/api/portraits/men/${i}.jpg`,
                                                type: "PASSAGEIRO",
                                            },
                                            {
                                                name: `Tripulante ${i}`,
                                                nationality: "Brasileira",
                                                photo: `https://randomuser.me/api/portraits/women/${i}.jpg`,
                                                type: "TRIPULANTE",
                                                sid_document: `SID${i}`,
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                    include: {
                        duvs: {
                            include: {
                                passengers: true,
                            },
                        },
                    },
                });
                vesselsData.push(vessel);
            }
            return vesselsData;
        });
    }
}
exports.SeedService = SeedService;
