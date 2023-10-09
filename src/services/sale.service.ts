import { error } from "console";
import repository from "../database/prisma.database";
import { CreateSaleDto } from "../dto/sale.dto";
import { Sale } from "../models/sale.model";
import userService from "./user.service";

class SaleService {
  public async create(data: CreateSaleDto) {
    const sale = new Sale(data.batteryId, data.carId, data.tokenAsString);

    const findBattery = await repository.battery.findUnique({
      where: {
        id: data.batteryId,
      },
    });

    if (!findBattery) {
      return { message: "battery not found" };
    }

    const decrease = findBattery.quantity - 1;

    const decreaseQuantity = await repository.battery.update({
      where: {
        id: findBattery.id,
      },
      data: {
        quantity: decrease,
      },
    });

    const findCar = await repository.car.findUnique({
      where: {
        id: data.carId,
      },
    });

    if (!findCar) {
      return { message: "Car not found." };
    }

    const findUser = await userService.getByToken(data.tokenAsString as string);

    if (!findUser) return { message: "User not found" };

    const createSale = await repository.sale.create({
      data: {
        batteryId: findBattery.id,
        carId: findCar.id,
        userId: findUser?.id,
      },

      include: {
        BatteryId: {
          select: {
            name: true,
            cca: true,
            price: true,
          },
        },
        CarId: {
          select: {
            name: true,
          },
        },
        UserId: {
          select: {
            name: true,
            address: true,
            cpf: true,
            phone: true,
          },
        },
      },
    });

    return createSale;
  }
}

export default new SaleService();
