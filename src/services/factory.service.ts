import repository from "../database/prisma.database";
import { ResponseDto } from "../dto/response.dto";
import { Factory } from "../models/factory.model";

class FactoryService {
  public async listAll() {
    const data = await repository.factory.findMany();
    return {
      code: 200,
      message: "Factory succefuly listed",
      data: data,
    };
  }

  public async create(name: string): Promise<ResponseDto> {
    const factory = new Factory(name);

    const createdFactory = await repository.factory.create({
      data: {
        name: factory.name,
      },
    });

    return {
      code: 200,
      message: "Fábrica criada com sucesso",
      data: createdFactory,
    };
  }
}

export default new FactoryService();
