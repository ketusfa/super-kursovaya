import React, {useContext, useState, useEffect} from "react";
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../../utils/consts"
import { fetchOneBrand, fetchOneType } from "../../http/deviceAPI";
import {delFromBasket, getBasket} from '../../http/deviceAPI';
import {observer} from 'mobx-react-lite';
import { Context } from '../../index';

import s from "./BasketItem.module.scss"

const BasketItem = observer(({item, img, name, id, price}) => { 
    const {device} = useContext(Context)
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
                    <img src={process.env.REACT_APP_API_URL + img}  />               
                </div>
                <div className={s.item__info}>
                    <h2>{type.name} {brand.name} {name}</h2> 
                    <h2 >{price} ₽</h2>
                </div>
            </div>
            <button className={s.item__button} onClick={(e) => dBasketDevice(e, id)}>Удалить</button>           
         </div>
    )


});

export default BasketItem
