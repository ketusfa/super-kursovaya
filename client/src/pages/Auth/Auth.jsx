import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {REGISTRATION_ROUTE, LOGIN_ROUTE} from "../../utils/consts"

const Auth = () => {

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE; 
    return (
        <>
        <h2>{isLogin ? "avtoriz" : "registration"}</h2>
       
        <form action="">
            <input type="text" placeholder="name"/>
            <input type="text" placeholder="passw" />
            {isLogin ? 
            <div>
                reg tut <NavLink to={REGISTRATION_ROUTE}>reeg</NavLink>
            </div>
            :
            <div>
                vhodite tut <NavLink to={LOGIN_ROUTE}>loog</NavLink>
            </div>

            }
            <button>
                {isLogin ? "enter" : 'registr'}
            </button>
        </form>
        </>
    );
}

export default Auth;