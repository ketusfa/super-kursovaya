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
                name: "device1", 
                price:2500, 
                raiting:5,
                img: "https://animecorner.me/wp-content/uploads/2022/11/bocchi-the-rock-anime-trailer.jpg"
            },

            {
                id:2, 
                name: "device2", 
                price:100, 
                raiting:4,
                img: "https://staticg.sportskeeda.com/editor/2022/12/ba0df-16720859960960-1920.jpg"
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