import React from "react";
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../../utils/consts"


const DeviceItem = ({device}) => {
       
    const history = useHistory()

    return (
        <>
        <div onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
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