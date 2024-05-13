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
import Assignments from './Assignment Page/Assignments';
import AuthProvider from '../src/provider/AuthProvider';
import Home from './homepage/Home';
import { Toaster } from 'react-hot-toast';
import CreateAssignment from '../src/create assignment/CreateAssignment';
import PrivateRoute from '../src/components/PrivateRoute';
import AssignmentDetails from './Assignment Page/AssignmentDetails';
import AssignmentUpdate from './Assignment Page/AssignmentUpdate';
import AssignmentSubmit from './Assignment Page/AssignmentSubmit';
import MyAttemptedAssignments from './My Attempted Assignments/MyAttemptedAssignments';

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
        path: '/assignments/:id',
        element: <PrivateRoute>
          <AssignmentDetails></AssignmentDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://group-study-server-henna.vercel.app/assignments/${params.id}`)

      },
      {
        path: '/assignments-update/:id',
        element: <AssignmentUpdate></AssignmentUpdate>,
        loader: ({ params }) => fetch(`https://group-study-server-henna.vercel.app/assignments/${params.id}`),
      },
      {
        path: '/assignment-submit/:id',
        element: <AssignmentSubmit></AssignmentSubmit>,
        loader: ({ params }) => fetch(`https://group-study-server-henna.vercel.app/assignments/${params.id}`)
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
        element:
          <PrivateRoute>
            <CreateAssignment></CreateAssignment>
          </PrivateRoute>,
      },
      {
        path: '/my-attempted-assignments',
        element: <PrivateRoute>
          <MyAttemptedAssignments></MyAttemptedAssignments>
        </PrivateRoute>,
      }
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
