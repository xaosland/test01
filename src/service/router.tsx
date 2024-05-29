import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Layout } from '@/layout/layout'
import { DecksPage } from '@/pages/decks.page'
import { LoginForm } from '@/pages/login'

const publicRoutes: RouteObject[] = [
  {
    element: <LoginForm />,
    path: '/login',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <DecksPage />,
    path: '/',
  },
  {
    element: <DecksPage />,
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
