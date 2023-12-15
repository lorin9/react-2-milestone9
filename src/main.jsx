import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Container from './Components/Container/Container.jsx'
import Home  from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './Components/Register/Register.jsx'
import HeroRegister from './Components/HeroRegister/HeroRegister.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element:<Container></Container>,
    children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Register></Register>
    },
    {
      path:'/heroRegister',
      element:<HeroRegister></HeroRegister>
    },
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
