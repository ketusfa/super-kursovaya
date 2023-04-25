
import React, {useContext, useEffect, useState} from 'react';
import Navbar from "./components/Navbar/Navbar"
import AppRouter from "./components/AppRouter";
import "./App.scss"
import { observer } from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";


const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

    useEffect(() => {
      console.log("pri 1 zahode")
      console.log(user)
      check().then(data => {
        console.log("data")
        console.log(data)

          user.setUser(data)
          user.setIsAuth(true)
          if (data.email === "admin"){
            user.setIsAdmin(true)
          }
          console.log("pri check")
          console.log(user)
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
