import React, {useState,useEffect} from "react";
import {fetchOneDevice} from "../../http/deviceAPI"
import {useParams} from "react-router-dom" 

const DevicePage = () => {

    const [device, setDevice] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <>
            <h1>{device.name}</h1>
            <img  src={process.env.REACT_APP_API_URL + device.img}/>
            <h3>Цена {device.price}</h3>
            <div>{device.raiting}</div>
        </>
    );
}

export default DevicePage;