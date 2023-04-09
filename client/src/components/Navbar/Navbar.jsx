import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../index"
import s from "./Navbar.module.scss"
import {observer} from "mobx-react-lite"
import { useNavigate } from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../../utils/consts"

const Navbar = observer(() => {
    const {user} = useContext(Context)
    let navigate = useNavigate()

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
                    <button onClick={() => navigate(ADMIN_ROUTE)}>adminpanel</button>
                    <button onClick={() => navigate(LOGIN_ROUTE)}>exit</button>
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