import Vue from 'vue'
import VueRouter from 'vue-router'
import Navbar from './components/Navbar'
import App from './App'

// router setup
import routes from './routes/routes'

// plugin setup
Vue.use(VueRouter);
Vue.use(Navbar);

// configure router
const router = new VueRouter({
    routes, // short for routes: routes
    linkActiveClass: 'active'
});
