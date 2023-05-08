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

    const splitPrice = (price) => {
        return price.toString()
        .split("").reverse().join("")
       .replace(/(\d{3})/g,"$1 ")
       .split("").reverse().join("")
    }

    if (loading) {
        return (
        <div className={s.device__wrapper} >
            <h2 className={s.device__title}>Загрузка...</h2>
            </div>
        )    
    }
    
    return (
       
        <div className={s.device__wrapper} >
            <div className={s.device__title}>
            {type.name} {brand.name} {device.name}
            </div>
            
            <div className={s.device__row} >
                <div className={s.device__image}>
                    <img  src={process.env.REACT_APP_API_URL + device.img}/>
                </div>
                <div className={s.device__box} >
                    <h3>{splitPrice(device.price)} ₽</h3>
                    <button className={s.device__button} onClick={add} >Добавить в корзину</button>
                </div>
            </div>
            <div className={s.device__info}> О товаре </div>
            <div className={s.device__data} dangerouslySetInnerHTML={{ __html: device.data}}></div>
        </div>
    );
}

export default DevicePage;