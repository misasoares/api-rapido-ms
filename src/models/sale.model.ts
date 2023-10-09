import { v4 as uuid } from 'uuid'
export class Sale {
    private _id:string
    constructor(private _userId:string, private _batteryId:string, private _carId:string){
        this._id = uuid()
    }

    public get id(){
        return this._id
    }

    public get userId(){
        return this._userId
    }
    public get batteryId(){
        return this._batteryId
    }
    public get carId(){
        return this._carId
    }

    public toJson(){
        return {
            id: this._id,
            userId:this._userId,
            batteryId:this._batteryId,
            carId:this._carId
        }
    }
}