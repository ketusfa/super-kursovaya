import React, { useContext } from "react";
import {observer} from "mobx-react-lite"
import {Context} from "../../index"

import s from "./Brandbar.module.scss"

const Brandbar = observer(() => {
        const {device} = useContext(Context)
    return (
        <>
        <div>
            <div className={s.brand__row}>
                {device.brands.map(brand => 
                    <button 
                    className={s.brand__item}
                    key={brand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                    >{brand.name}</button>
                )}
            </div>
        </div>
        </>
    );
});

export default Brandbar;