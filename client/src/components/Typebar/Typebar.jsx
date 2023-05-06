import React, { useContext } from "react";
import {observer} from "mobx-react-lite"
import {Context} from "../../index"

import s from "./Typebar.module.scss"

const Typebar = observer(() => {
        const {device} = useContext(Context)
    return (
        <>
        <div>
            <div className={s.type__row}>
                <button 
                    className={`${s.type__item} ${!device.selectedType.id ? s.active : ''}`}
                    onClick={() => device.setSelectedType({})}
                 >Все</button>
                
                {device.types.map(type => 
                    <button 
                    className={`${s.type__item} ${type.id === device.selectedType.id ? s.active : ''}`}
                    
                    key={type.id} 
                    onClick={() => device.setSelectedType(type)}
                    
                    >{type.name}</button>
                )}
            </div>
        </div>
        </>
    );
});

export default Typebar;