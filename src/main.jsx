import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider
} from "react-router-dom"
//bootstrap file import
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './routes/Route.jsx'
// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './providers/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router}> </RouterProvider>
   </AuthProvider>
   <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
