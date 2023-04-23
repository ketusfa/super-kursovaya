import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../index"
import s from "./Navbar.module.scss"
import {observer} from "mobx-react-lite"
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../../utils/consts"
import {  useHistory} from "react-router-dom"

const Navbar = observer(() => {

    const history = useHistory()

    const {user} = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        user.setIsAdmin(false)
        console.log("out")
        history.push(SHOP_ROUTE)
    }
    

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
                      {user.isAdmin ?
                             <button className={s.navbar__button} onClick={() => history.push(ADMIN_ROUTE)}>Панель администратора</button>
                            :
                            <div></div>
                        }
                   
                    <button className={s.navbar__button}  onClick={() => logOut()}>Выход</button>
                </div>
                :
                
               <div>
                    <button className={s.navbar__button} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</button>
                </div>
                }
        </div>
        </>
    );
})

export default Navbar;