import repository from "../database/prisma.database";
import { CreateBatteryDto } from "../dto/battery.dto";
import { ResponseDto } from "../dto/response.dto";
import { Battery } from "../models/battery.model";

class BatteryService{
    public async create(data:CreateBatteryDto):Promise<ResponseDto>{

        const battery = new Battery(data.name, data.cca, data.warranty, data.quantity, data.price)

        const createdBattery = await repository.battery.create({
            data:{
                name: battery.name,
                cca: battery.cca,
                warranty:battery.warranty,
                quantity: battery.quantity,
                price: battery.price
            }
        })

        return {
            code:200,
            message:"Bateria criada com sucesso.",
            data: createdBattery
        }
    }
}

export default new BatteryService