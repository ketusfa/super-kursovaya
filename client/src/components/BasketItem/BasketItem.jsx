import React, {useContext, useState, useEffect} from "react";
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../../utils/consts"
import { fetchOneBrand, fetchOneType } from "../../http/deviceAPI";
import {delFromBasket, getBasket} from '../../http/deviceAPI';
import {observer} from 'mobx-react-lite';
import { Context } from '../../index';
import splitPrice from "../../utils/splicePrice"

import s from "./BasketItem.module.scss"

const BasketItem = observer(({item}) => { 
    
    const {device} = useContext(Context)
    const history = useHistory()

    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const dBasketDevice = async (e, id) => {
        try {
            e.preventDefault()
            await delFromBasket({id: id})
            let data = await getBasket()
            device.setBasket(data)
        } catch(err){
             alert(err.response.data.message)
        }   
    }
  
    useEffect(() => {
        fetchOneBrand(item.device.brandId).then(data => setBrand(data))
        fetchOneType(item.device.typeId).then(data => setType(data))
    }, [])

    return (
        <div className={s.item__wrapper}>
            <div className={s.item__row}>
                <div className={s.item__img}>
                    <img src={process.env.REACT_APP_API_URL + item.device.img}  alt={item.device.name}/>               
                </div>
                <div className={s.item__info}>
                    <h2 onClick={() => history.push(DEVICE_ROUTE + '/' + item.device.id)}>
                        {type.name} {brand.name} {item.device.name}
                    </h2>
                    <h2 >{splitPrice(item.device.price)} ₽</h2>
                </div>
            </div>
            <button className={s.item__button} onClick={(e) => dBasketDevice(e, item.id)}>Удалить</button>           
         </div>
    )
});

export default BasketItem
