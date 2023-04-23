
import React, {useContext, useEffect, useState} from 'react';
import Navbar from "./components/Navbar/Navbar"
import AppRouter from "./components/AppRouter";
import "./App.scss"
import { observer } from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";


const App = observer( () => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

    useEffect(() => {
      console.log("pri 1 zahode")
      console.log(user)
      check().then(() => {
          user.setUser(true)
          user.setIsAuth(true)
      }).finally(() => setLoading(false))
  }, [])

  if (loading) {
      return <h2>Загрузка...</h2>
  }

  return (
    <>
      <Navbar/>
      <AppRouter/>
    </>
     
   

  );
})

export default App;
