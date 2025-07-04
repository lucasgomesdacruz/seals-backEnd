import prismaClient from "../../prisma";

class SeedService {
  async execute() {
    // Limpa os dados em ordem de dependência para evitar erros de FK
    await prismaClient.passenger.deleteMany();
    await prismaClient.duv.deleteMany();
    await prismaClient.vessel.deleteMany();

    const vesselsData = [];

    for (let i = 1; i <= 10; i++) {
      const vessel = await prismaClient.vessel.create({
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
  }
}

export { SeedService };
