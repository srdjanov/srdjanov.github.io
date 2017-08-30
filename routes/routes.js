import Main from '../components/Dashboard/Layout/Main.vue'
import NotFound from '../pages/404.vue'

const routes = [
    {
        path: '/',
        component: MainView,
        redirect: '/',
        children: [
            {
                path: '/contact',
                component: Sellers,
                name: 'sellers'
            }
        ]
    },
    {
        path:
        '*',
        component: NotFound
    }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
 function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
