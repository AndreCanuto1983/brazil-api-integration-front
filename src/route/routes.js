import Router from 'vue-router';

const NotFound = () => import('../components/NotFound');
const Index = () => import('../components/Index');
const Home = () => import('../components/Home');
const Books = () => import('../components/Books');
const Company = () => import('../components/Company');

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
                },
                {
                    name: 'Books',
                    path: '/books',
                    component: Books,
                },
                {
                    name: 'Company',
                    path: '/company',
                    component: Company,
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