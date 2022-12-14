import Home from '../pages/Home'
import Posts from '../pages/Posts'
import Poststwo from '../pages/Poststwo'
import Test from '../pages/Test'
import PostIdPage from '../pages/PostIdPage'
import Error from '../pages/Error'
import Login from '../pages/Login'


export const privatRoutes = [
  { path: '/', element: Home },
  { path: '/posts', element: Posts },
  { path: '/poststwo', element: Poststwo },
  { path: '/test', element: Test },
  { path: '/posts/:id', element: PostIdPage },
  { path: '/error', element: Error },
]

export const publicRoutes = [
  { path: '/login', element: Login },
]