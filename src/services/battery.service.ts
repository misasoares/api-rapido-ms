import repository from "../database/prisma.database";
import { CreateBatteryDto } from "../dto/battery.dto";
import { ResponseDto } from "../dto/response.dto";
import { Battery } from "../models/battery.model";

class BatteryService{

    public async listAll(){
        const result = await repository.battery.findMany()
        return {
            code:200,
            message:"Lista de baterias",
            data: result
        }
    }

    public async create(data:CreateBatteryDto):Promise<ResponseDto>{

        const battery = new Battery(data.img,data.name,data.amper ,data.cca, data.warranty, data.quantity, data.price)

        const createdBattery = await repository.battery.create({
            data:{
                img:battery.img,
                name: battery.name,
                amper: battery.amper,
                cca: battery.cca,
                warranty:battery.warranty,
                quantity: battery.quantity,
                price: battery.price
            },
            
            
        })

        return {
            code:201,
            message:"Bateria criada com sucesso.",
            data: createdBattery
        }
    }


}

export default new BatteryService