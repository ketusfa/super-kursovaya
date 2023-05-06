import React, {useContext, useEffect} from "react";
import Typebar from "../../components/Typebar/Typebar"
import Brandbar from "../../components/Brandbar/Brandbar"
import DeviceList from "../../components/DeviceList/DeviceList";
import {Context} from "../../index"

import {observer} from "mobx-react-lite";
import {fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceAPI";

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import s from "./Shop.module.scss"

const Shop =  observer(() => {

    const {device} = useContext(Context)

    useEffect(() => {
        device.setSelectedType({})
        device.setSelectedBrand({})
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices().then(data =>  device.setDevices(data))
        
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id).then(data => {
            device.setDevices(data)
        })
    }, [ device.selectedType, device.selectedBrand,])


    

    return (
        <>
        <div className={s.shop__wrapper}>
            <div className={s.shop__side}>
                <Typebar/>
            </div>
            <div className={s.shop__mainfield}>
                <Brandbar/>
                <DeviceList/>
            </div>
        </div>
        </>
    );
})

export default Shop;