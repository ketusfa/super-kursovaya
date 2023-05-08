import React from "react";
import { NavLink, useLocation,useHistory } from "react-router-dom";
import {REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../../utils/consts"
import {observer} from "mobx-react-lite"
import { login, registration } from "../../http/userAPI";
import { Context } from "../../index"
import s from "./Auth.module.scss"
import { useContext } from "react";




const Auth = observer(() => {

    const {user} = useContext(Context)

    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE; 

    

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const click = async (e) => {
        try {
            e.preventDefault()
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(data)
            user.setIsAuth(true)
            if (email === "admin"){
                user.setIsAdmin(true)
               
            } 
            history.push(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    function showPass(e) {
        const passwordInput = document.querySelector('input[name="password"]');
        if (e.target.checked) {
          passwordInput.type = "text";
        } else {
          passwordInput.type = "password";
        }
      }


    return (
        <div className={s.auth__wrapper}>
        <div className={s.auth__card}>
        <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
       
        <form className={s.auth__form} action="">
            <input type="text" placeholder="Ваша почта"  value={email} onChange={e => setEmail(e.target.value)}/>
            <input name="password" type="password" placeholder="Ваш пароль" value={password}  onChange={e => setPassword(e.target.value)}/>
            <div className={s.password__show}>
                        <div className={s.password__label} >Показать пароль</div>
                        <input  className={s.password__check} type="checkbox" onClick={(e) => showPass(e)}/>
            </div>

            {isLogin ? 
            <div>
                Зарегистрируйтесь <NavLink  className={s.auth__link} to={REGISTRATION_ROUTE}>тут</NavLink>
            </div>
            :
            <div>
                Чтобы войти перейдите <NavLink  className={s.auth__link} to={LOGIN_ROUTE}>сюда</NavLink>
            </div>

            }
            <button className={s.login__button} onClick={click}>
                {isLogin ? "Войти" : 'Зарегистрироваться'}
            </button>
        </form>
        </div>
        </div>
    );
});

export default Auth;