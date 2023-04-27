import s from "../modals.module.scss"
import React, {useState} from "react";

import {delDevice} from "../../http/deviceAPI";

const DeleteDevice = ({setModal, modal}) => {

    const [value, setValue] = useState('')

    const dDevice = (e) => {
        
        try {
            e.preventDefault()
            console.log(value)
            delDevice({name: value}).then(() => {
                console.log("device api отправлен")
                setValue('');
                setModal(false);
            })
            
        } catch(err){
            alert(err.response.data.message)
        }
       
    }



    return(
            <div className={`${s.overlay} ${modal ? s.show : "" }`}> 
            <div className={s.modal__wrapper}>
                
                <h1>Удалить устройство</h1>
                <button className={s.modal__close} onClick={() => setModal(false)}>&#10006;</button>
                
                <form action="" className={s.modal__form}>
                    <input  value={value} onChange={e => setValue(e.target.value)} 
                    type="text" placeholder="Введите имя устройства" required/>
                   
                    <button type="submit" onClick={dDevice} >Удалить</button>
                </form>
            </div>
        </div>
    )

}

export default DeleteDevice