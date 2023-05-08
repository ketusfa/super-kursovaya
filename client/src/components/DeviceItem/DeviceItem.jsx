import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../../utils/consts"
import { fetchOneBrand, fetchOneType } from "../../http/deviceAPI";

import s from "./DeviceItem.module.scss"

const DeviceItem = ({device}) => {

    const history = useHistory()

    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");
    
    useEffect(() => {
        fetchOneBrand(device.brandId).then(data => setBrand(data))
        fetchOneType(device.typeId).then(data => setType(data))
    }, [])
       
    const splitPrice = (price) => {
        return price.toString()
        .split("").reverse().join("")
       .replace(/(\d{3})/g,"$1 ")
       .split("").reverse().join("")
    }
   
    return (
        <>
        <div className={s.device__wrapper} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <div className={s.device__imagewrapper}>
                <img src={process.env.REACT_APP_API_URL + device.img}  alt={device.name}/>
            </div>
                <div className={s.device__price}>
                    {splitPrice(device.price)} ₽
                </div>
                <div className={s.device__info}>
                    <div className={s.device__type}>
                        {type.name}
                    </div>
                    
                    <div className={s.device__brand}>
                    {brand.name}
                    </div>    
                </div>
                <div className={s.device__name}>
                    {device.name}
                </div>
            </div>
        </>
    );
};

export default DeviceItem;