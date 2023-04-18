import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {REGISTRATION_ROUTE, LOGIN_ROUTE} from "../../utils/consts"
import { registration } from "../../http/userAPI";

import s from "./Auth.module.scss"

const Auth = () => {

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE; 

    const click = async () => {
        if (isLogin) {
            const response = await login();
            console.log(response)
        } else {
            const response = await registration();
            console.log(response)
        }

        
    }


    return (
        <div className={s.auth__wrapper}>
        <div className={s.auth__card}>
        <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
       
        <form className={s.auth__form} action="">
            <input type="text" placeholder="Ваш логин"/>
            <input type="text" placeholder="Ваш пароль" />
            {isLogin ? 
            <div>
                Зарегистрируйтесь <NavLink to={REGISTRATION_ROUTE}>тут</NavLink>
            </div>
            :
            <div>
                Чтобы войти перейдите <NavLink to={LOGIN_ROUTE}>сюда</NavLink>
            </div>

            }
            <button onClick={click}>
                {isLogin ? "Войти" : 'Зарегистрироваться'}
            </button>
        </form>
        </div>
        </div>
    );
}

export default Auth;