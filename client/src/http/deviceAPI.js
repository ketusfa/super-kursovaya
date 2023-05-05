import {$authHost, $host} from "./index";
//import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const fetchOneType = async (id) => {
    const {data} = await $host.get('api/type/' + id)
    return data
}

export const delType = async (type) => {
    const {data} = await $authHost.delete('api/type',  { data: type })
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

export const fetchOneBrand = async (id) => {
    const {data} = await $host.get('api/brand/' + id)
    return data
}

export const delBrand = async (brand) => {
    const {data} = await $authHost.delete('api/brand',  { data: brand })
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const delDevice = async (device) => {
    const {data} = await $authHost.delete('api/device',  { data: device })
    return data
}

export const fetchDevices = async (typeId, brandId) => {
    const {data} = await $host.get('api/device', {params: {
            typeId, brandId
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}


export const addToBasket = async (deviceId) => {
    const {data} = await $authHost.post('api/basket', deviceId)
    return data
}

export const delFromBasket = async (id) => {
    const {data} = await $authHost.delete('api/basket',  { data: id })
    return data
}


export const getBasket = async () => {
    const {data} = await $authHost.get('api/basket')
    return data
}