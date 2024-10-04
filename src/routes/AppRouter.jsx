import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import App from '../App'


const guestRouter = createBrowserRouter([

    { path: "/", element: <Login /> },
    { path: "*", element: <Navigate to='/' /> },
])

const userRouter = createBrowserRouter([
    { path: '/', element: <App /> },
    { path : 'friend', element: <p>Friends</p>}
])

export default function AppRouter() {
    const user = null
    const finalRouter = user ? userRouter : guestRouter
    return (
        <RouterProvider router={finalRouter} />
    )
}