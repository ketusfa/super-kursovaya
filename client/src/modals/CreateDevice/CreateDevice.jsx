import React, {useState, useContext, useEffect, useRef} from "react";
import {createDevice, fetchBrands, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../../index"

import s from "../modals.module.scss"

const CreateDevice =  observer( ({setModal, modal}) => {

    const {device} = useContext(Context)

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])
    const fileInputRef = useRef(null);

    const resetData = () => {
        setModal(false)
        setName("")
        setPrice(0)
        setFile(null)
        fileInputRef.current.value = null;
        setInfo([])
    }

    

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    const addInfo = (e) => {
        e.preventDefault()
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (e, number) => {
            e.preventDefault()
            setInfo(info.filter(i => i.number !== number))
        }
    

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = (e) => {
        e.preventDefault()
        const formData = new FormData()
        try{
            formData.append('name', name)
            formData.append('price', `${price}`)
            formData.append('img', file)
            formData.append('brandId', device.selectedBrand.id)
            formData.append('typeId', device.selectedType.id)
            formData.append('info', JSON.stringify(info))
            console.log(name, price, file, device.selectedBrand.id, device.selectedType.id, JSON.stringify(info))
            createDevice(formData).then(() => resetData())
        } catch(error){
            alert(error)
        }
    }


    return(
        <div className={`${s.overlay} ${modal ? s.show : "" }`}> 
        <div className={s.modal__wrapper}>
            
            <h1>Добавить новое устройство</h1>
            <button className={s.modal__close} onClick={() => setModal(false)}>close</button>
            
            <form action="" className={s.modal__form}>
                

                <div className={s.dropdown}>
                    <span>{ device.selectedType.name ||  "Выберите тип"}</span>
                    <div className={s.dropdown__content}>
                    {
                        device.types.map(type => 
                       <p 
                       key={type.id}
                       onClick={() =>  device.setSelectedType(type)}>
                            {type.name}
                       </p>
                        )
                    }
                    </div>
                </div>  


                 <div className={s.dropdown}>
                    <span>{device.selectedBrand.name ||  "Выберите бренд"}</span>
                    <div className={s.dropdown__content}>
                    {
                        device.brands.map(brand => 
                       <p 
                       key={brand.id}
                       onClick={() =>  device.setSelectedBrand(brand)}>
                            {brand.name}
                       </p>
                        )
                    }
                    </div>
                </div>   
                
              
                
                <input 
                type="text"  
                value={name}
                onChange={e => setName(e.target.value)} 
                placeholder="Название устройства " required/>

                <input 
                type="number" 
                value={price}
                onChange={e => setPrice(Number(e.target.value))}
                placeholder="Стоимость устройства "
                 required/>

                <label >Изображение:</label>

                <input 
                type="file" 
                onChange={selectFile} 
                ref={fileInputRef}
                placeholder="Изображение" 
                required/>
                
                <button onClick={addInfo}> Добавить новое свойство</button>
                {info.map(i =>
                    <div className={s.info__wrapper}>
                                <input 
                                type="text"
                                value={i.title}
                                onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                placeholder="Введите название свойства" />

                                <input 
                                type="text"
                                value={i.description}
                                onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                placeholder="Введите описание свойства" />
                        
                                <button onClick={(e) => removeInfo(e, i.number)}>Удалить</button>
                            </div>
                    )}

                <button type="submit" onClick={addDevice} >Добавить</button>
            </form>
        </div>
    </div>
)

});

export default CreateDevice