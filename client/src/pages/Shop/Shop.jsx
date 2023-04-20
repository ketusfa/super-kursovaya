import React from "react";
import Typebar from "../../components/Typebar/Typebar"
import Brandbar from "../../components/Brandbar/Brandbar"
import DeviceList from "../../components/DeviceList/DeviceList";

import s from "./Shop.module.scss"

const Shop = () => {
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
}

export default Shop;