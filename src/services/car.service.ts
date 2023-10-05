import repository from "../database/prisma.database";
import { CreateCarDto } from "../dto/car.dto";
import { ResponseDto } from "../dto/response.dto";
import { Car } from "../models/car.model";

class CarService {

  public async list(){
    const result = await repository.car.findMany({
      include:{
        battery:true
      }
    })
    return result
}

  public async create(data: CreateCarDto): Promise<ResponseDto> {
    const car = new Car(data.name, data.yearFabrication, data.factoryId, data.batteryId);

    const createdCar = await repository.car.create({
      data: {
        name: car.name,
        yearFabrication: car.yearFabrication,
        factoryId: car.factoryId,
        battery: {
          connect: {
            id: car.batteryId,
          },
        },
      },
    });

    return {
      code: 200,
      message: "Carro criada com sucesso.",
      data: createdCar,
    };
  }
}

export default new CarService();
