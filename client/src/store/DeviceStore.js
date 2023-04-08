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
            {
                id:1, 
                name: "hm", 
                price:2500, 
                raiting:5,
               
            },

            {
                id:2, 
                name: "nice", 
                price:100, 
                raiting:4
            }
       ];
       this._brands = [
        {id: 1, name: "brand1"},
        {id: 2, name: "brand2"},
        {id: 3, name: "brand3"},
        {id: 4, name: "brand4"},
    ];
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
        this._udevices = devices;
    }
    setBrands(brands) {
        this._brands = brands;
    }

    get types() {
        return this._types
    }

    get SelectedType() {
       return this._selectedType;
    }
    get SelectedBrand() {
        return this._selectedBrand;
     }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}