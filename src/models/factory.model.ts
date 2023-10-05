import { v4 as uuid } from 'uuid'

export class Factory{
    private _id: string

    constructor (private _name:string){
        this._id = uuid()
    }
    public get id(){
        return this._id
    }

    public get name(){
        return this._name
    }

    public toJson(){
        return {
            id: this._id,
            name: this._name
        }
    }
}