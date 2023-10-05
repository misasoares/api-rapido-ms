import { v4 as uuid} from 'uuid'

export class Car{
    private _id: string
    constructor(private _name:string, private _yearFabrication:string, private _factoryId:string, private _batteryId:string[]){
        this._id = uuid()
    }

    public get id(){
        return this._id
    }

    public get name(){
        return this._name
    }

    public get yearFabrication(){
        return this._yearFabrication
    }

    public get factoryId (){
        return this._factoryId
    }

    public get batteryId(){
        return this._batteryId
    }

    public toJson(){
        return {
            id: this._id,
            name: this._name,
            yearFabrication: this._yearFabrication,
            factory: this._factoryId
        }
    }

}