import React from "react";
import {useNavigate } from "react-router-dom"
import {DEVICE_ROUTE} from "../../utils/consts"


const DeviceItem = ({device}) => {
       
    let navigate = useNavigate()

    return (
        <>
        <div onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <div>
                <img src={device.img}  alt={device.name}/>
            </div>
            <div>
                {device.name}
            </div>
            <div>
                <div>{device.raiting}</div>
            </div>
        </div>
        </>
    );
};

export default DeviceItem;