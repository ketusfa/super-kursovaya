import React, {useState,useEffect} from "react";
import {fetchOneDevice, addToBasket} from "../../http/deviceAPI"
import {useParams} from "react-router-dom" 

const DevicePage = () => {

    const [device, setDevice] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    const add = () => {
        const formData = new FormData()
        formData.append('deviceId', id)
        addToBasket(formData).then(response => alert(`Товар ` + device.name + ` был добавлен в вашу корзину!`))
    }

    return (
        <>
            <h1>{device.name}</h1>
            <button  onClick={add} >Добавить в корзину</button>
            <img  src={process.env.REACT_APP_API_URL + device.img}/>
            <h3>Цена {device.price}</h3>
            <div>{device.raiting}</div>
        </>
    );
}

export default DevicePage;