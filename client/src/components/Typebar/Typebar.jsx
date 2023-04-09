import React, { useContext } from "react";
import {observer} from "mobx-react-lite"
import {Context} from "../../index"

const Typebar = observer(() => {
        const {device} = useContext(Context)
    return (
        <>
        <div>
            <ul>
                {device.types.map(type => 
                    <li 
                    key={type.id} 
                    onClick={() => device.setSelectedType(type)}
                    active={type.id === device.selectedType}
                    >{type.name}</li>
                )}
            </ul>
        </div>
        </>
    );
});

export default Typebar;