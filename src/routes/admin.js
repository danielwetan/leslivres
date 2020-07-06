import {PageNotFound} from '../pages/public';
import {Home} from '../pages/admin'

const AdminRoutes = [
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