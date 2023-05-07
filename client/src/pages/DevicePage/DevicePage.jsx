import React, {useState,useEffect} from "react";
import {fetchOneDevice, addToBasket,  fetchOneBrand, fetchOneType} from "../../http/deviceAPI"
import {useParams} from "react-router-dom" 

import s from "./DevicePage.module.scss"

const DevicePage = () => {

    const [device, setDevice] = useState({});
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");
    const [loading, setLoading] = useState(true);

    const {id} = useParams()

    useEffect(() => {
        fetchOneDevice(id).then(data => {
            setDevice(data);
            fetchOneBrand(data.brandId).then(brandData => setBrand(brandData));
            fetchOneType(data.typeId).then(typeData => setType(typeData));
    }).finally(() => setLoading(false))
}, [])

    const add = () => {
        const formData = new FormData()
        formData.append('deviceId', id)
        addToBasket(formData).then(response => alert(`Товар ` + device.name + ` был добавлен в вашу корзину!`))
    }

    if (loading) {
        return <h2>Загрузка...</h2>
    }
    
    return (
        <>
            <h1>{device.name}</h1>
            <div>{type.name} {brand.name}</div>
            <img  height={200} src={process.env.REACT_APP_API_URL + device.img}/>
            <h3>Цена {device.price}</h3>
            <button  onClick={add} >Добавить в корзину</button>
            <div className={s.device__data} dangerouslySetInnerHTML={{ __html: device.data}}></div>
        </>
    );
}

export default DevicePage;