// src/components/routesConfig.js
import React from 'react';
import Layout1 from '../Layout1/Layout1';
import RoutingList from './RoutingList';
import Home from '../Components/page/Home/Dashboard/Dashboard';


const routesConfig = [
  {
    path: '/',
    element: <Layout1 />,
    children: [
      {
        path: '/',
        element: <RoutingList Component={Home} />   
      },
    ] 
  },
];

export default routesConfig;
