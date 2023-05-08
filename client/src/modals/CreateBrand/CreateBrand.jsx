import React, {useState} from "react";
import {createBrand} from "../../http/deviceAPI";
import s from "../modals.module.scss"

const CreateBrand = ({setModal, modal}) => {

    const [value, setValue] = useState('')

    const addBrand = (e) => {
        e.preventDefault()
        if(value) {
        createBrand({name: value}).then(() => {
            setValue('');
            setModal(false);
        })
     }
    }


    return(
    <div className={`${s.overlay} ${modal ? s.show : "" }`}> 
        <div className={s.modal__wrapper}>
            
            <h1>Добавить новый бренд</h1>
            <button className={s.modal__close} onClick={() => setModal(false)}>&#10006;</button>
            
            <form action="" className={s.modal__form}>
            <input  value={value} onChange={e => setValue(e.target.value)} 
                    type="text" placeholder="Введите название бренда" required/>
                <button type="submit" onClick={addBrand} >Добавить</button>
            </form>
        </div>
    </div>
)


}

export default CreateBrand