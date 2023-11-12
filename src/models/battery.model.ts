import { v4 as uuid } from "uuid";

export class Battery {
  private _id: string;
  constructor(private _img:string,private _name: string,private _amper:number ,private _cca: number, private _warranty: number, private _quantity: number, private _price: number) {
    this._id = uuid();
  }


  public get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }

  public get cca() {
    return this._cca;
  }
  public get warranty() {
    return this._warranty;
  }
  public get quantity() {
    return this._quantity;
  }
  public get price() {
    return this._price;
  }
  public get amper(){
    return this._amper
  }
  
public get img(){
  return this._img
}

  
}
