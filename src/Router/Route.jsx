import Home from '../Page/Home'
import Login from '../Page/Login'
import Register from '../Page/Register'
import SingleUser from '../Page/SingleUser';
import ListUser from '../Page/ListUser';
import RouteProtected from './RouteProtected';
import Add from '../Page/Add';

export const routeList = [
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/register',
        element: <Register/>,
    },
    {
        path: '/user/:id',
        element:(
                <RouteProtected>
                    <SingleUser/>
                </RouteProtected>
        ),
    },
    {
        path: '/user',
        element: (
                <RouteProtected>
                    <ListUser/>
                </RouteProtected>
        ),
    },
    {
        path: '/add',
        element: (
                <RouteProtected>
                    <Add/>
                </RouteProtected>
        ),
    },
];