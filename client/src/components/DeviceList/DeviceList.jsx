import React, { useContext } from "react";
import {observer} from "mobx-react-lite"
import {Context} from "../../index"
import DeviceItem from "../DeviceItem/DeviceItem"

import s from "./DeviceList.module.scss"

const DeviceList = observer(() => {
        const {device} = useContext(Context)
        
    return (
        
        <div className={s.device__wrapper}>
            <div className={s.device__field}>
                {device.devices.map(device => 
                    <DeviceItem key={device.id} device={device}/>
                )}
            </div>
        </div>
        
    );
});

export default DeviceList;