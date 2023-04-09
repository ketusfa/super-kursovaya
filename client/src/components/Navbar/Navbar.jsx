import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../index"
import s from "./Navbar.module.scss"
import {observer} from "mobx-react-lite"
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../../utils/consts"
import {  useHistory} from "react-router-dom"

const Navbar = observer(() => {

    const history = useHistory()

    const {user} = useContext(Context)
    

    return (
        <>
        <div className={s.navbar__wrapper}>
            <div className={s.linkrow}>
                <Link className={s.navbar__link} href="">Ссылка 1</Link>
                <Link className={s.navbar__link} href="">Ссылка 2</Link>
                <Link className={s.navbar__link} href="">Ссылка 3</Link>
            </div>
            {user.isAuth ?
                
                <div>
                    <button className={s.navbar__button} onClick={() => history.push(ADMIN_ROUTE)}>Панель администратора</button>
                    <button className={s.navbar__button} onClick={() => history.push(LOGIN_ROUTE)}>Выход</button>
                </div>
                :
                
               <div>
                    <button className={s.navbar__button} onClick={() => user.setIsAuth(true)}>Авторизация</button>
                </div>
                }
        </div>
        </>
    );
})

export default Navbar;