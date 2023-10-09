import { stringify } from "querystring";
import repository from "../database/prisma.database";
import { ResponseDto } from "../dto/response.dto";
import { CreateUserDto, UpdateUserDto } from "../dto/user.dto";
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
    const user = new User(data.name, data.email, data.address, data.phone, data.cpf, data.password);
    const createdUser = await repository.user.create({
      data: {
        name: user.name,
        address: user.address,
        password: user.password,
        phone: user.phone,
        cpf: user.cpf,
        email: user.email,
      },
    });
    return {
      code: 200,
      message: "Usuário criado com sucesso.",
      data: createdUser,
    };
  }

  public async update(data: UpdateUserDto): Promise<ResponseDto> {
    const user = await repository.user.findUnique({
      where: {
        id: data.id,
      },
    });
    if (!user) {
      return {
        code: 404,
        message: "User not found",
      };
    }

    const updateUser = await repository.user.update({
      where: {
        id: data.id,
      },
      data: {
        password: data.password,
        email: data.email,
        token: data.token,
      },
    });

    return {
      code: 200,
      message: "User successfully updated",
      data: updateUser,
    };
  }

  public async getUserByEmailAndPassword(email: string, password: string) {
    const user = await repository.user.findUnique({
      where: {
        email: email,
        password: password,
      },
    });

    return user;
  }

  public async getByToken(token: string) {
    const user = await repository.user.findUnique({
      where: {
        token: token,
      },
    });

    return user;
  }
}

export default new UserService();
