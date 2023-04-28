import s from "../modals.module.scss"
import React, {useState} from "react";

import {delType} from "../../http/deviceAPI";

const DeleteType = ({setModal, modal}) => {

    const [value, setValue] = useState('')

    const dType = async (e) => {
        try {
            e.preventDefault()
            await delType({name: value})
            setValue('');
            setModal(false);
        } catch(err){
             alert(err.response.data.message)
        }       
    }



    return(
            <div className={`${s.overlay} ${modal ? s.show : "" }`}> 
            <div className={s.modal__wrapper}>
                
                <h1>Удалить тип</h1>
                <button className={s.modal__close} onClick={() => setModal(false)}>&#10006;</button>
                
                <form action="" className={s.modal__form}>
                    <input  value={value} onChange={e => setValue(e.target.value)} 
                    type="text" placeholder="Введите тип" required/>
                   
                    <button type="submit" onClick={dType} >Удалить</button>
                </form>
            </div>
        </div>
    )

}

export default DeleteType