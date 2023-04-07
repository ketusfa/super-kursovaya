import {makeAutoObservable} from "mobx"

export default class DeviceStore {

    constructor() {
       this._types = [
            {id: 1, name: "type1"},
            {id: 2, name: "type2"},
            {id: 3, name: "type3"},
            {id: 4, name: "type4"},
       ];
       this._devices = [
            {id:1, 
            name: "hm", 
            price:2500, 
            raiting:5
            }
       ];
       this._slectedType = {};
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types;
    }
    
    setSelectedType(type) {
        this._selectedType = type
    }

    setDevices(devices) {
        this._udevices = devices;
    }

    get types() {
        return this._types
    }

    get SelectedType() {
       return this._selectedType;
    }

    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}