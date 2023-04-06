import {makeAutoObservable} from "mobx"

export default class DeviceStore {

    constructor() {
       this._types = [
            {id: 1, name: "mmm"},
            {id: 2, name: "ees"}
       ];
       this._devices = [
            {id:1, 
            name: "hm", 
            price:2500, 
            raiting:5
            }
       ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types;
    }

    setDevices(devices) {
        this._udevices = devices;
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}