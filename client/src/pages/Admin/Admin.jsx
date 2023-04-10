import React from "react";
import CreateBrand from "../../modals/CreateBrand/CreateBrand";
import CreateDevice from "../../modals/CreateDevice/CreateDevice";
import CreateType from "../../modals/CreateType/CreateType";

import s from "./Admin.module.scss"


const Admin = () => {

        const [modalType, setModalType] = React.useState(false);
        const [modalBrand, setModalBrand] = React.useState(false);
        const [modalDevice, setModalDevice] = React.useState(false);

    return (
        <>
        <div className={s.admin__wrapper}>
            
                <button className={s.admin__button} onClick={() => setModalType(true)}>Добавить тип</button>
                <button className={s.admin__button} onClick={() => setModalBrand(true)}>Добавить бренд</button>
                <button className={s.admin__button} onClick={() => setModalDevice(true)}>Добавить устройство</button>
            
        </div>
        <CreateBrand setModal={setModalBrand} modal={modalBrand}/>
        <CreateDevice setModal={setModalDevice} modal={modalDevice} />
        <CreateType setModal={setModalType} modal={modalType}/>
        </>
    );
}

export default Admin;