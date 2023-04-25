import s from "../modals.module.scss"
import React, {useState} from "react";
import {createType} from "../../http/deviceAPI";

const CreateType = ({setModal, modal}) => {

    const [value, setValue] = useState('')

    const addType = (e) => {
        e.preventDefault()
        createType({name: value}).then(() => {
            setValue('');
            setModal(false);
        })
    }



    return(
            <div className={`${s.overlay} ${modal ? s.show : "" }`}> 
            <div className={s.modal__wrapper}>
                
                <h1>Добавить новый тип товаров</h1>
                <button className={s.modal__close} onClick={() => setModal(false)}>&#10006;</button>
                
                <form action="" className={s.modal__form}>
                    <input  value={value} onChange={e => setValue(e.target.value)} 
                    type="text" placeholder="Введите название типа товаров" required/>
                   
                    <button type="submit" onClick={addType} >Добавить</button>
                </form>
            </div>
        </div>
    )

}

export default CreateType