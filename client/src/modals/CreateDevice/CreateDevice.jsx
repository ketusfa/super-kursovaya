import React, {useState, useContext, useEffect, useRef} from "react";
import {createDevice, fetchBrands, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../../index"


import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';


import s from "../modals.module.scss"

const CreateDevice =  observer( ({setModal, modal}) => {

    const {device} = useContext(Context)

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [editorData, setEditorData] = useState('');
    const fileInputRef = useRef(null);

    const resetData = () => {
        setModal(false)
        setName("")
        setPrice(0)
        setFile(null)
        fileInputRef.current.value = null;
        setEditorData("")
        device.setSelectedType({})
        device.setSelectedBrand({})
    }

    

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    const handleEditorData = (event, editor) => {
        const data = editor.getData();
        setEditorData(data);
    };

    
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
            formData.append('editorData', editorData);
            console.log(name, price, file, device.selectedBrand.id, device.selectedType.id, editorData)
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
                placeholder="Название устройства " 
                required/>

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
                
                
               
                <CKEditor editor={ ClassicEditor } 
                onChange={ handleEditorData }/>
                <input type="hidden" name="editorData" value={editorData} />

                <button type="submit" onClick={addDevice} >Добавить</button>
            </form>
        </div>
    </div>
)

});

export default CreateDevice