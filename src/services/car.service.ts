import repository from "../database/prisma.database";
import { AddBatteryToCar } from "../dto/battery.dto";
import { CreateCarDto } from "../dto/car.dto";
import { ResponseDto } from "../dto/response.dto";
import { Car } from "../models/car.model";

class CarService {
  public async list() {
    const result = await repository.car.findMany({
      include: {
        battery: true,
      },
    });
    return result;
  }

  public async create(data: CreateCarDto): Promise<ResponseDto> {
    const car = new Car(data.name, data.yearFabrication, data.factoryId, data.batteryId);

    const createdCar = await repository.car.create({
      data: {
        name: car.name,
        yearFabrication: car.yearFabrication,
        factoryId: car.factoryId,
        battery: {
          connect: car.batteryId.map((id) => ({ id })),
        },
      },
      select: {
        name: true,
        yearFabrication: true,
        battery: {
          select: {
            name: true,
            cca: true,
            price: true,
            warranty: true,
            quantity: true,
          },
        },
        factory: {
          select: {
            name: true,
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

  public async addBatteryToCar(data: AddBatteryToCar) {
    
      const findCar = await repository.car.findUnique({
        where: {
          id: data.carId,
        },
      });

      const updated = await repository.car.update({
        where: {
          id: findCar!.id,
        },
        data: {
          battery: {
            connect: {
              id: data.batteryId,
            },
          },
        },
        select:{
          name:true,
          battery:true
        }
      });
    
      return updated
  }
}

export default new CarService();
