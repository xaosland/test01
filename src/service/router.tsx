import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Layout } from '@/layout/layout'
import { DocumentsTable } from '@/pages/documentsTable'
import { LoginForm } from '@/pages/login'
import FullFeaturedCrudGrid from '@/pages/table'

const publicRoutes: RouteObject[] = [
  {
    element: <LoginForm />,
    path: '/login',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <DocumentsTable />,
    path: '/',
  },
  {
    element: <FullFeaturedCrudGrid />,
    path: '/table',
  },
]

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

function PrivateRoutes() {
  const isAuthenticated = localStorage.getItem('x-auth') !== null

  return isAuthenticated ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to={'/login'} />
  )
}

export function Router() {
  return <RouterProvider router={router} />
}
