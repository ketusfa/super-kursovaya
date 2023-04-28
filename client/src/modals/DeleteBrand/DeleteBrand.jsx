import s from "../modals.module.scss"
import React, {useState} from "react";

import {delBrand} from "../../http/deviceAPI";

const DeleteBrand = ({setModal, modal}) => {

    const [value, setValue] = useState('')

    const dBrand = async (e) => {
        try {
            e.preventDefault()
            await delBrand({name: value})
            setValue('');
            setModal(false);
        } catch(err){
             alert(err.response.data.message)
        }   
    }



    return(
            <div className={`${s.overlay} ${modal ? s.show : "" }`}> 
            <div className={s.modal__wrapper}>
                
                <h1>Удалить бренд</h1>
                <button className={s.modal__close} onClick={() => setModal(false)}>&#10006;</button>
                
                <form action="" className={s.modal__form}>
                    <input  value={value} onChange={e => setValue(e.target.value)} 
                    type="text" placeholder="Введите бренд" required/>
                   
                    <button type="submit" onClick={dBrand} >Удалить</button>
                </form>
            </div>
        </div>
    )

}

export default DeleteBrand