import {Home, BookRoute, DetailBook, Login, Register, PageNotFound} from '../pages';

const AdminRoutes = [
  {
    name: 'BookRoute',
    path: '/book',
    component: BookRoute
  },
  {
    name: 'DetailBook',
    path: '/book/:bookId',
    component: DetailBook
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
    name: 'PageNotFound',
    path: '*',
    component: PageNotFound
  }
]

export default AdminRoutes;