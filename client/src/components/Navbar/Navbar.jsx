import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../index"
import s from "./Navbar.module.scss"
import {observer} from "mobx-react-lite"
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE} from "../../utils/consts"
import { useHistory} from "react-router-dom"

const Navbar = observer(() => {

    const history = useHistory()

    const {user} = useContext(Context)
   

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        user.setIsAdmin(false)
        user.setIsAdmin(false)
        
        localStorage.removeItem("token")
        console.log("out")
        history.push(SHOP_ROUTE)
    }
    

    return (
        <>
        <div className={s.navbar__wrapper}>
            <div className={s.linkrow}>
                <Link className={s.navbar__link} to={SHOP_ROUTE}>shop home</Link>
            </div>
            {user.isAuth ?
                
                <div className={s.control__row}>

                    <div className={s.auth__info} >Вы авторизованы как {user.user.email}</div>

                    <div className={s.button__row}>
                        {user.isAdmin ?
                                <button className={s.navbar__button} onClick={() => history.push(ADMIN_ROUTE)}>Панель администратора</button>
                                 :
                                <button className={s.navbar__button} onClick={() => history.push(BASKET_ROUTE)}>Корзина</button>
                             }
                        <button className={s.navbar__button}  onClick={() => logOut()}>Выход</button>
                    </div>
                    
                 </div>
                :
               <div  className={s.button__row}>
                    <button className={s.navbar__button} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</button>
               </div>
            }
        </div>
        </>
    );
})

export default Navbar;