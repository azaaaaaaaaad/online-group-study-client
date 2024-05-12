import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Login from './components/Login';
import Register from './components/Register';
import Error from './components/Error';
import Assignments from './components/Assignments';
import AuthProvider from './provider/AuthProvider';
import Home from './homepage/Home';
import { Toaster } from 'react-hot-toast';
import CreateAssignment from '../src/create assignment/CreateAssignment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/assignments',
        element: <Assignments></Assignments>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/create-assignment',
        element: <CreateAssignment></CreateAssignment>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <div className='font-briem'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <Toaster></Toaster>
    </div>
  </React.StrictMode>,
)
