import {Home, BookRoute, DetailBook, Login, Register, Profile} from '../pages/public';

const PublicRoutes = [
  {
    name: 'DetailBook',
    path: '/book/:bookId',
    component: DetailBook
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