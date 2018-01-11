import App from '../views/app';
import * as Pages from '../views/pages';


export default [{
  component: App,
  routes: [
    {
      path: '/',
      component: Pages.Home,
      exact: true,
    },
    {
      path: '/about',
      component: Pages.About,
    },
    {
      path: '*',
      component: Pages.NotFound,
    },
  ],
}];
