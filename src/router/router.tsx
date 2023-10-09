import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../pages/Layout/Layout'
import { Error } from '../pages/Error/Error'
import Home from '../pages/Home/Home'
import { movieAction } from './Actionse/ActionsMovie'
import { moviesLoader } from './Loader/moviesLoader'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    action: movieAction,
    children: [
      {
        index: true,
        element: <Home />,
        loader: moviesLoader,
      },
      {
        path: '/movies/filter/:param',
        element: <Home />,
        loader: moviesLoader,
      },
    ],
  },
])
