import React from "react";
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../../utils/consts"

import s from "./DeviceItem.module.scss"

const DeviceItem = ({device}) => {
       
    const history = useHistory()

    return (
        <>
        <div className={s.device__wrapper} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <div className={s.device__imagewrapper}>
                <img src={process.env.REACT_APP_API_URL + device.img}  alt={device.name}/>
            </div>
            <div className={s.device__info}>
                {device.name}
            </div>
            <div className={s.device__raiting}>
                <div>{device.raiting}</div>
            </div>
        </div>
        </>
    );
};

export default DeviceItem;