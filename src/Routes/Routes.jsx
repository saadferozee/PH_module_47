import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../Pages/Root';
import Home from '../Pages/Home';
import Login from '../Pages/Login';

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {path: '/', Component: Home},
            {
                path: '/login',
                Component: Login
            }
        ]
    }
])

export default router;