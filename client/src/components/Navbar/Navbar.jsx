import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../index"
import s from "./Navbar.module.scss"
import {observer} from "mobx-react-lite"
const Navbar = observer(() => {
    const {user} = useContext(Context)
    return (
        <>
        <div>
            <div className={s.linkrow}>
                <Link href="">ess</Link>
                <Link href="">mn</Link>
                <Link href="">gg</Link>
            </div>
            {user.isAuth ?
                <>
                    <button>adminpanel</button>
                    <button onClick={() => user.setIsAuth(false)} >exit</button>
                </>
                :
                <>
               
                <button onClick={() => user.setIsAuth(true)}>autorizasiya</button>
                </>
                }
        </div>
        </>
    );
})

export default Navbar;