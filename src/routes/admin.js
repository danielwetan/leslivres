import {PageNotFound} from '../pages/public';
import {Home} from '../pages/admin'
import {Books} from '../pages/admin'
import {Genres} from '../pages/admin';
import {Authors} from '../pages/admin';

const AdminRoutes = [
  {
    name: 'Books',
    path: '/admin/books',
    component: Books
  },
  {
    name: 'Genres',
    path: '/admin/genres',
    component: Genres
  },
  {
    name: 'Authors',
    path: '/admin/authors',
    component: Authors
  },
  {
    name: 'Home',
    path: '/admin',
    component: Home
  },
  {
    name: 'PageNotFound',
    path: '*',
    component: PageNotFound
  }
]

export default AdminRoutes;