import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import UserStore from "./store/UserStore"
import DeviceStore from './store/DeviceStore';


export const Context = createContext(null)

ReactDOM.createRoot(
  document.getElementById('root'))
  .render(
    <Context.Provider value={
      {
        user: new UserStore(),
        device: new DeviceStore(),
      }
    }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  );
