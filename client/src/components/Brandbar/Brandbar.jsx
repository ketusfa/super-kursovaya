import React, { useContext } from "react";
import {observer} from "mobx-react-lite"
import {Context} from "../../index"

const Brandbar = observer(() => {
        const {device} = useContext(Context)
    return (
        <>
        <div>
            <div>
                {device.brands.map(brand => 
                    <div 
                    key={brand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                    >{brand.name}</div>
                )}
            </div>
        </div>
        </>
    );
});

export default Brandbar;