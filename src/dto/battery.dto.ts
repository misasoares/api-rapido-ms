export interface CreateBatteryDto{
    name: string
    amper: number
    cca:number
    warranty: number
    quantity: number
    price:number

}

export interface AddBatteryToCar{
    batteryId:string
    carId:string
}