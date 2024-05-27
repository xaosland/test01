import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { DocumentsTable } from '../pages/documentsTable.tsx'
import { Login } from '../pages/login.tsx'

const publicRoutes: RouteObject[] = [
  {
    element: <Login />,
    path: '/login',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <DocumentsTable />,
    path: '/',
  },
]

const routes = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

function PrivateRoutes() {
  const isAuthenticated = localStorage.getItem('token') !== null

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

export function Routes() {
  return <RouterProvider router={routes} />
}
