import React from "react";
import {Context} from "../../index"

import s from "../modals.module.scss"

const CreateDevice = ({setModal, modal}) => {

    const {device} = React.useContext(Context);

    return(
        <div className={`${s.overlay} ${modal ? s.show : "" }`}> 
        <div className={s.modal__wrapper}>
            
            <h1>CreateDevice</h1>
            <button className={s.modal__close} onClick={() => setModal(false)}>close</button>
            
            <form action="" className={s.modal__form}>
                

                <label >Тип устройства:</label>
                <select>
                    {
                        device.types.map(type => <option key={type.id}>{type.name}</option>)
                    }

                </select>

                <label >Бренд устройства:</label>
                <select>
                    {
                        device.brands.map(brand => <option key={brand.id}>{brand.name}</option>)
                    }

                </select>
                
                <input type="text" placeholder="Навание устройства "/>
                <input type="number" placeholder="Стоимость устройства "/>
                <label >Изображение:</label>
                <input type="file" placeholder="Изображение"/>

                <button>Добавить</button>
            </form>
        </div>
    </div>
)

}

export default CreateDevice