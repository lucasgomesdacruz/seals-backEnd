import { Request, Response } from "express";
import { SeedService } from "../../services/seed/SeedService";

class SeedController {
  async handle(req: Request, res: Response) {
    try {
      const seedService = new SeedService();
      const vesselsData = await seedService.execute();

      return res.json({ message: "Seed criada com sucesso!", data: vesselsData });
    } catch (error) {
      console.error("Erro ao criar seed:", error);
      return res.status(500).json({ error: "Erro ao criar seed." });
    }
  }
}

export { SeedController };
