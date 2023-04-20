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
                {device.types.map(type => 
                    <button 
                    className={s.type__item}
                    key={type.id} 
                    onClick={() => device.setSelectedType(type)}
                    active={type.id === device.selectedType}
                    >{type.name}</button>
                )}
            </div>
        </div>
        </>
    );
});

export default Typebar;