/**
 *@author  liumm308
 *@data  2020/07/09 14:07
 *@mail xidian_liu@163.com
 */

import Login from '@/pages/Login'
import Mainlayout from '@/pages/mainlayout/mainlayout';
import Dashboard from '@/pages/dashboard/dashboard';
import Business from '@/pages/business/business';
import NotFound from '@/components/NotFound/index.jsx'

const configRouterArr = [
    {
        path:'/login',
        component: Login,
    },
    {
        path: '/',
        component: Mainlayout,
        children: [
            { path: '/', exact: true,redirect: '/dashboard',component: Dashboard},//默认首页
            {
                path: '/dashboard',
                exact: true,
                component: Dashboard,
            },
            {
                path: '/business',
                exact: true,
                component: Business,
            },
            {
                path: '*',
                component: NotFound,
            }
        ],
    },
];

export default configRouterArr;