export interface CreateBatteryDto{
    name: string
    cca:string
    warranty: string
    quantity: number
    price:number

}

export interface AddBatteryToCar{
    batteryId:string
    carId:string
}