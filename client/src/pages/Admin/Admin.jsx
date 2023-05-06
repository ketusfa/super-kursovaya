import React from "react";
import CreateBrand from "../../modals/CreateBrand/CreateBrand";
import CreateDevice from "../../modals/CreateDevice/CreateDevice";
import CreateType from "../../modals/CreateType/CreateType";
import DeleteDevice from "../../modals/DeleteDevice/DeleteDevice";
import DeleteType from "../../modals/DeleteType/DeleteType";
import DeleteBrand from "../../modals/DeleteBrand/DeleteBrand";

import s from "./Admin.module.scss"


const Admin = () => {

        const [modalType, setModalType] = React.useState(false);
        const [modalBrand, setModalBrand] = React.useState(false);
        const [modalDevice, setModalDevice] = React.useState(false);

        const [modalDeviceDelete, setModalDeviceDelete] = React.useState(false);
        const [modalTypeDelete, setModalTypeDelete] = React.useState(false);
        const [modalBrandDelete, setModalBrandDelete] = React.useState(false);

    return (
        <>
        <div className={s.admin__wrapper}>
                <div className={s.admin__col}>
                    <button className={s.admin__button} onClick={() => setModalType(true)}>Добавить тип</button>
                    <button className={s.admin__button} onClick={() => setModalBrand(true)}>Добавить бренд</button>
                    <button className={s.admin__button} onClick={() => setModalDevice(true)}>Добавить устройство</button>
                </div>
                <div className={s.admin__col}>
                    <button className={s.admin__button} onClick={() => setModalTypeDelete(true)}>Удалить тип</button>
                    <button className={s.admin__button} onClick={() => setModalBrandDelete(true)}>Удалить бренд</button>
                    <button className={s.admin__button} onClick={() => setModalDeviceDelete(true)}>Удалить устройство</button>
                </div>
        </div>
        <CreateBrand setModal={setModalBrand} modal={modalBrand}/>
        <CreateDevice setModal={setModalDevice} modal={modalDevice} />
        <CreateType setModal={setModalType} modal={modalType}/>
        
        <DeleteDevice setModal={setModalDeviceDelete} modal={modalDeviceDelete}/>
        <DeleteType setModal={setModalTypeDelete} modal={modalTypeDelete}/>
        <DeleteBrand setModal={setModalBrandDelete} modal={modalBrandDelete}/>
        
        </>
    );
}

export default Admin;