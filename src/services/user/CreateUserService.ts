import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
    name: string;
    email: string;
    password: string;
}
class CreateUserService {
    async execute({ name, email, password }: UserRequest) {

        //Verifica se ele enviou um email
        if(!email) {
            throw new Error("email incorrect")
        }

        //Verifica se esse email já está cadastrado na plataforma
        const userAlrearyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(userAlrearyExists) {
            throw new Error("User already exists")
        }

        const passwordHash = await hash(password, 8)

        const user =  await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
            },
            select: {
                id: true,
                name: true,
                email: true,
            }
        })

        return user;
    }
}

export { CreateUserService }