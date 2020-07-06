import {PageNotFound} from '../pages/public';
import {Home} from '../pages/admin'
import {Books} from '../pages/admin'

const AdminRoutes = [
  {
    name: 'Books',
    path: '/admin/books',
    component: Books
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