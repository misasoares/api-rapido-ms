import { v4 as uuid} from 'uuid'

export class User {
    private _id:string

    constructor(private _name:string, private _address:string, private _phone:string, private _cpf:string){
        this._id = uuid()
    }

    public get id(){
        return this._id
    }

    public get name(){
        return this._name
    }

    public get address(){
        return this._address
    }
    public get phone(){
        return this._phone
    }
    public get cpf(){
        return this._cpf
    }

    public toJson(){
        return {
            id: this._id,
            name: this._name,
            address: this._address
        }
    }
}