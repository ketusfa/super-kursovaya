import {makeAutoObservable} from "mobx"

export default class DeviceStore {

    constructor() {
       this._types = [];
       this._devices = [];
       this._brands = [];
       this._baskets = []
       this._selectedType = {};
       this._selectedBrand = {};

       makeAutoObservable(this)        
}

    setTypes(types) {
        this._types = types;
    }
    
    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    setDevices(devices) {
        this._devices = devices;
    }
    setBrands(brands) {
        this._brands = brands;
    }
    setBaskets(basket){
        this._baskets = basket
    }


    get types() {
        return this._types
    }
    get basket() {
        return this._baskets
    }

    get selectedType() {
       return this._selectedType;
    }
    get selectedBrand() {
        return this._selectedBrand;
     }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}