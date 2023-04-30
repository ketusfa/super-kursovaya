import React, { useEffect, useContext } from 'react';
import { Context } from '../../index';
import { getBasket } from '../../http/deviceAPI';
import { observer } from 'mobx-react-lite';

import s from "./Basket.module.scss"


const Basket = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        getBasket().then(data => device.setBaskets(data))
    }, [])

    let prices = 0;
    {device.basket.map(price =>
        prices += Number(price.device.price)
    )}

    return (
     <>
            <h1>Корзина</h1>

            <h2>Итого:</h2>
            <h3>{prices}<span >рублей</span></h3>
        
            {device.basket.map(product =>
                <div className={s.product__wrapper}>
                            <div>
                                <img src={process.env.REACT_APP_API_URL + product.device.img} width={200} />
                                <h2>{product.device.name}</h2>
                            </div>
                     
                            <div >
                                <h2 >{product.device.price} рублей</h2>
                            </div>
                      
                    </div>
               
            )}
     
     </>
    );
});

export default Basket;