import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../index"
import s from "./Navbar.module.scss"
import {observer} from "mobx-react-lite"
import {ADMIN_ROUTE} from "../../utils/consts"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = observer(() => {

    const history = useHistory()

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
                    <button onClick={() => history.push(ADMIN_ROUTE)}  >adminpanel</button>
                    <button onClick={() => user.setIsAuth(false)}>exit</button>
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