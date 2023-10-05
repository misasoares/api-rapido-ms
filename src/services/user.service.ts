import repository from "../database/prisma.database";
import { ResponseDto } from "../dto/response.dto";
import { CreateUserDto } from "../dto/user.dto";
import { User } from "../models/user.model";

class UserService {
  public async listAll(): Promise<ResponseDto> {
    const data = await repository.user.findMany();

    return {
      code: 200,
      message: "Users succefuly listed",
      data: data,
    };
  }

  public async create(data: CreateUserDto): Promise<ResponseDto> {
    const user = new User(data.name, data.address, data.phone, data.cpf, data.password);
    const createdUser = await repository.user.create({
      data: {
        name: user.name,
        address: user.address,
        password: user.password,
        phone: user.phone,
        cpf: user.cpf,
      },
    });
    return {
      code: 200,
      message: "Usuário criado com sucesso.",
      data: createdUser,
    };
  }
}

export default new UserService();