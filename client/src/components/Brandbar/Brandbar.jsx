import React, { useContext } from "react";
import {observer} from "mobx-react-lite"
import {Context} from "../../index"

import s from "./Brandbar.module.scss"

const Brandbar = observer(() => {
        const {device} = useContext(Context)
    return (
        <div>
            <div className={s.brand__row}>

            <button 
                    className={`${s.brand__item} ${!device.selectedBrand.id ? s.active : ''}`}
                    onClick={() => device.setSelectedBrand({})}
                 >Все</button>

                {device.brands.map(brand => 
                    <button 
                    className={`${s.brand__item} ${brand.id === device.selectedBrand.id ? s.active : ''}`}
                    key={brand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                    >{brand.name}</button>
                )}
            </div>
        </div>
    );
});

export default Brandbar;