import React from "react";
import Typebar from "../../components/Typebar/Typebar"
import Brandbar from "../../components/Brandbar/Brandbar"
import DeviceList from "../../components/DeviceList/DeviceList";
const Shop = () => {
    return (
        <>
        <div className="side">
            <Typebar/>
        </div>
        <div className="itemplace">
            <Brandbar/>
            <DeviceList/>
        </div>
        </>
    );
}

export default Shop;