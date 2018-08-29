import Pages from './pages';
const {Home, Button} = Pages;
const routes = [
    { path: '/', component: Home, exact: true },
    { path: '/button', component: Button }
];
export default routes;
