import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NavbarApiSlice } from './features/Navbar/NavbarSlice.js'
import { store } from './store/index.js'
import { Provider } from 'react-redux'
import { MainApiSlice } from './features/Main/MainSlice.js'
store.dispatch(NavbarApiSlice.endpoints.getNavbar.initiate())
store.dispatch(MainApiSlice.endpoints.getMain.initiate())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
