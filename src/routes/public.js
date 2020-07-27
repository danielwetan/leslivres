import {Home, BookRoute, BookDetail, Login, Register, Profile} from '../pages/public';

const PublicRoutes = [
  {
    name: 'DetailBook',
    path: '/book/:bookId',
    component: BookDetail
  },
  {
    name: 'BookRoute',
    path: '/book',
    component: BookRoute
  },
  {
    name: 'Login',
    path: '/login',
    component: Login
  },
  {
    name: 'Register',
    path: '/register',
    component: Register
  },
  {
    name: 'Home',
    exact: true,
    path: '/',
    component: Home
  },
  {
    name: 'Profile',
    path: '/profile',
    component: Profile
  }
]

export default PublicRoutes;