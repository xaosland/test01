import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { ROUTES } from '@/common/const/routes'
import { Layout } from '@/layout/layout'
import { LoginPage, NotFound, TablePage } from '@/pages'

const publicRoutes: RouteObject[] = [
  {
    element: <LoginPage />,
    path: ROUTES.login,
  },
]
const privateRoutes: RouteObject[] = [
  {
    element: <Navigate to={ROUTES.table} />,
    path: ROUTES.base,
  },
  {
    element: <TablePage />,
    path: ROUTES.table,
  },
  {
    element: <NotFound />,
    path: ROUTES.rest,
  },
]

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.login} />
}

const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      ...publicRoutes,
    ],
    element: <Layout />,
    path: '/',
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
