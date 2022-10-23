import Router from 'vue-router';

const NotFound = () => import('../components/NotFound');
const Index = () => import('../components/Index');
const Home = () => import('../components/Home');

export default new Router({
    mode: 'history',
    hash: false, //remove # da url
    routes: [
        {
            path: '/',
            redirect: '/index',
            component: Index,
            children: [
                {
                    name: 'Home',
                    path: '/',
                    component: Home,
                }
            ],
        },
        {
            path: '*',
            name: 'NotFound',
            // redirect: '/'
            component: NotFound
        },
    ],
})